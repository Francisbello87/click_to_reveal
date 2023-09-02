"use client";
import { MdWork } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const drawer = document.querySelector(".drawer");
      const close = document.querySelector(".close");
      const cardsContainer = document.querySelector(".cards");

      if (drawer && close && cardsContainer) {
        const tl = gsap.timeline({
          paused: true,
          reversed: true,
          onStart: function () {
            cardsContainer.style.pointerEvents = "all";
          },
          onReverseComplete: function () {
            cardsContainer.style.pointerEvents = "none";
          },
        });
        tl.from(".cards .card", {
          duration: 1.5,
          y: 1000,
          stagger: {
            amount: 0.3,
          },
          ease: "power4.inOut",
        })
          .from(
            ".close",
            {
              duration: 0.5,
              scale: 0,
              delay: 1,
            },
            "<"
          )
          .from(".footer", { duration: 0.5, opacity: 0 });

        drawer.addEventListener("click", function () {
          if (tl.reversed()) {
            tl.play();
          } else {
            tl.reverse();
          }
        });

        close.addEventListener("click", function () {
          tl.reverse();
        });
      }
    }
  }, []);

  return (
    <main>
      <div className="container">
        <div className="nav">
          <div className="nav-item">
            <div className="nav-icon">
              <MdWork className="icons" />
            </div>
            <div className="nav-icon-name">Projects</div>
            <div className="drawer"></div>
          </div>
          <div className="nav-item">
            <div className="nav-icon">
              <FaTwitter className="icons" />
            </div>
            <div className="nav-icon-name">Twitter</div>
          </div>
          <div className="nav-item">
            <div className="nav-icon">
              <FaLinkedin className="icons" />
            </div>
            <div className="nav-icon-name">LinkedIn</div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="close">
          <IoMdClose />
        </div>
        <div className="card c1">Ultiverse</div>
        <div className="card c2">Racling</div>
        <div className="card c3">GSAP</div>
        <div className="card c4">Refine</div>
        <div className="card c5">WEB3</div>
        <div className="footer">Click on Close to get rid of the cards</div>
      </div>
    </main>
  );
}
