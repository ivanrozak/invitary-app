"use client";
import {
  Button,
  Input,
  ScrollShadow,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";

const Comments = () => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [confirmation, setConfirmation] = useState("YES");
  const [totalGuest, setTotalGuest] = useState("1");

  const fetchComments = async () => {
    const res = await fetch(
      window.location.origin + "/api/comment?id=656fd880b2d14968a9df7bf7"
    );
    const data = await res.json();
    setComments(data);
  };

  const postComments = async () => {
    setLoading(true);
    const res = await fetch(window.location.origin + "/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        content,
        confirmation,
        userId: "656fd880b2d14968a9df7bf7",
        totalGuest: parseInt(totalGuest),
      }),
    });
    const data = await res.json();
    setLoading(false);
    resetFields();
    fetchComments();
  };

  const resetFields = () => {
    setName("");
    setContent("");
    setConfirmation("YES");
    setTotalGuest("1");
  };

  React.useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="text-sm font-light break-words">
      <div className="mb-2">Coments</div>
      <div className="mb-2 flex flex-col gap-4">
        <Input
          size="sm"
          label="Nama"
          variant="underlined"
          value={name}
          onValueChange={setName}
        />
        <Textarea
          size="sm"
          label="Ucapan"
          variant="underlined"
          minRows={1}
          value={content}
          onValueChange={setContent}
        />
        <Select
          size="sm"
          label="Kehadiran"
          variant="underlined"
          selectedKeys={[confirmation]}
          onChange={(e: any) => setConfirmation(e.target.value)}
        >
          <SelectItem key={"YES"} value="YES">
            Hadir
          </SelectItem>
          <SelectItem key={"NO"} value="NO">
            Tidak Hadir
          </SelectItem>
        </Select>
        <Select
          size="sm"
          label="Jumlah Tamu"
          variant="underlined"
          selectedKeys={[totalGuest]}
          onChange={(e: any) => {
            setTotalGuest(e.target.value);
          }}
        >
          <SelectItem key={"1"} value={"1"}>
            1
          </SelectItem>
          <SelectItem key={"2"} value={"2"}>
            2
          </SelectItem>
          <SelectItem key={"3"} value={"3"}>
            3
          </SelectItem>
        </Select>
        <Button
          radius="none"
          isDisabled={!name || !content}
          isLoading={loading}
          onClick={postComments}
        >
          Kirim
        </Button>
      </div>
      <ScrollShadow className="mt-5 flex flex-col gap-2 max-h-[40vh] overflow-y-auto pb-8">
        {comments.map((comment: any) => {
          return (
            <div key={comment.id} className="bg-black/10">
              <div className="font-medium">{comment.name}</div>
              <div>{comment.content}</div>
              <div>Hadir: {comment.confirmation}</div>
            </div>
          );
        })}
      </ScrollShadow>
    </div>
  );
};

export default Comments;
