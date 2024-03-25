'use client'
import React, { useEffect, useState } from 'react'
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/react'
import { Comment } from '@/types'
import { deleteComment, fetchComments } from '@/lib/useComments'
import { formatDateTime } from '@/lib/formatdate'
import { useParams } from 'next/navigation'

const CommentDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const [loading, setLoading] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [selectedComent, setSelectedComment] = useState<Comment | null>(null)

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleFetchComment = async () => {
    const res = await fetchComments(slug.toString())
    setComments(res)
  }

  const handleDelete = async (onClose: () => void) => {
    setLoading(true)
    const res = await deleteComment(selectedComent?.id!)
    setLoading(false)
    handleFetchComment()
    onClose()
  }

  useEffect(() => {
    handleFetchComment()
  }, [])

  function analyzeReservations(datas: Comment[]): {
    totalGuestsYes: number
    totalGuestsNo: number
    totalAllGuests: number
  } {
    const confirmedGuests = datas.filter((r) => r.confirmation === 'YES')

    const unconfirmedGuests = datas.filter((r) => r.confirmation === 'NO')

    const totalGuestsYes = confirmedGuests.length
    const totalAllGuests = confirmedGuests?.reduce(
      (acc, r) => acc + parseInt(r.totalGuest),
      0,
    )

    const totalGuestsNo = unconfirmedGuests.length

    return { totalGuestsYes, totalGuestsNo, totalAllGuests }
  }

  const { totalGuestsYes, totalGuestsNo, totalAllGuests } =
    analyzeReservations(comments)

  return (
    <div className="bg-slate-100">
      <div className="max-w-xl h-screen max-h-screen overflow-y-auto mx-auto flex w-full flex-col p-6 bg-white">
        <Tabs fullWidth aria-label="Options">
          <Tab key="comments" title="Comments" className="flex flex-col gap-2">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardBody className="text-sm">
                  <div>{comment.name}</div>
                  <div className="text-xs font-light">
                    {formatDateTime(comment.createdAt!)}
                  </div>
                  <div className="font-light">{comment.content}</div>
                  <div className="flex justify-between items-center mt-1">
                    <div>
                      Akan Hadir: {comment.confirmation},{' '}
                      <span>Jumlah Tamu: {comment.totalGuest}</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedComment(comment)
                        onOpen()
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Tab>
          <Tab key="attendance" title="Attendance">
            <Card>
              <CardBody className="flex-row gap-4 text-center text-sm">
                <div className="flex-1">
                  <div className="text-gray-500">Akan Hadir</div>
                  <div className="text-xl font-semibold mt-2">
                    {totalGuestsYes}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-gray-500">Tidak Hadir</div>
                  <div className="text-xl font-semibold mt-2">
                    {totalGuestsNo}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-gray-500">Total Tamu</div>
                  <div className="text-xl font-semibold mt-2">
                    {totalAllGuests}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>Want to delete this comment?</ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button
                    color="danger"
                    isLoading={loading}
                    onClick={() => handleDelete(onClose)}
                  >
                    Delete
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

export default CommentDetailPage
