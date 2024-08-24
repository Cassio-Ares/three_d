"use client";
import Link from "next/link";
import "./styles.css";

export const Btn_neon = ({ text_btn, link }) => {
  return (
    <Link href={link}>
      <div className="btn_neon">
        {text_btn}
      </div>
    </Link>
  );
};
