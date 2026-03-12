"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LetTalkSection() {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => setMounted(true), []);
  const pathname = usePathname();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.message || "Failed to send email.");
      }
    } catch (err) {
      console.error("Client-side error sending email:", err);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
      
        .contact-hero {
          text-align:center; padding:64px 0 0;
        }
        .contact-hero h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(52px,9vw,100px);
          font-weight:700;
          color:rgba(255,255,255,0.85);
          filter:blur(3.5px);
          letter-spacing:-1px; line-height:1; margin:0;
          transition:filter .35s ease;
          cursor:default; user-select:none;
        }
        .contact-hero h2:hover { filter:blur(0); }

        .contact-sub {
          text-align:center; color:#555;
          font-size:14px; margin:18px 0 0;
          font-family:Georgia,serif;
        }

        .contact-grid { border-top:1px solid #1e1e1e; margin-top:24px; }

        .grid-input {
          position:relative; z-index:1;
          display:block; width:100%;
          background:transparent; border:none; outline:none;
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(24px,4vw,42px);
          font-weight:300;
          color:rgba(255,255,255,0.2);
          padding:22px 28px;
          resize:none; caret-color:#fff;
          transition:color .2s;
        }
        .grid-input::placeholder { color:rgba(255,255,255,0.18); }
        .grid-input:focus { color:rgba(255,255,255,0.88); }
        .grid-input:focus::placeholder { color:rgba(255,255,255,0.07); }

        .send-row {
          position:relative; border-bottom:1px solid white;
          cursor:pointer; transition:background .2s;
          background: transparent; 
          border: none; 
          appearance: none; 
          width: 100%; 
        }
        .send-row::before {
          content:''; position:absolute; inset:0;
          background-image: repeating-linear-gradient(
            90deg, transparent,
            transparent calc(12.5% - 1px),
            #1e1e1e calc(12.5% - 1px),
            #1e1e1e 12.5%
          );
          pointer-events:none; z-index:0;
        }
        .send-row:hover { background:rgba(255,255,255,0.025); }
        .send-inner {
          position:relative; z-index:1;
          display:flex; align-items:center; justify-content:space-between;
          padding:22px 28px;
        }
        .send-inner span {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(26px,4vw,44px);
          font-weight:400; color:rgba(255,255,255,0.85);
        }
        .send-arrow {
          font-size:clamp(22px,3vw,34px);
          color:rgba(255,255,255,0.55);
          display:inline-block; transform:rotate(-30deg);
          transition:transform .25s ease, color .2s;
        }
        .send-row:hover .send-arrow { transform:rotate(0deg); color:#fff; }

        .empty-row {
          position:relative; border-bottom:1px solid #1e1e1e; height:56px;
        }
        .empty-row::before {
          content:''; position:absolute; inset:0;
          background-image: repeating-linear-gradient(
            90deg, transparent,
            transparent calc(12.5% - 1px),
            #1e1e1e calc(12.5% - 1px),
            #1e1e1e 12.5%
          );
          pointer-events:none;
        }
        .fade-up { opacity:0; transform:translateY(18px); transition:opacity .65s ease,transform .65s ease; }
        .fade-up.in { opacity:1; transform:translateY(0); }

        .chat-pill {
          position:fixed; bottom:24px; right:24px; z-index:99;
          display:flex; align-items:center; gap:8px;
          background:#111; border:1px solid #252525; border-radius:999px;
          padding:11px 20px; font-size:13px; color:#999;
          cursor:pointer; font-family:sans-serif; text-decoration:none;
          transition:background .2s,color .2s;
        }
        .chat-pill:hover { background:#1c1c1c; color:#fff; }
      `}</style>


      <div>
        <div className={`contact-hero fade-up ${mounted ? "in" : ""}`}
          style={{ transitionDelay: "200ms" }}>
          <h2>{pathname == '/work' ? "Let's Talk" : "LIKE WHAT YOU SEE?"} </h2>
          <p className="contact-sub">
            Got a project in mind? Drop me a message below and I'll hit you back ASAP.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={`contact-grid fade-up ${mounted ? "in" : ""}`}
            style={{ transitionDelay: "350ms" }}>

            <div className="g-row">
              <input
                className="grid-input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="g-row">
              <input
                className="grid-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="g-row">
              <textarea
                className="grid-input"
                placeholder="Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="send-row" disabled={loading}>
              <div className="send-inner">
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <span className="send-arrow">↗</span>
              </div>
            </button>

            <div className="empty-row" />
          </div>
        </form>

        {success && <p style={{ textAlign: "center", color: "lightgreen", marginTop: "10px" }}>Your message has been sent succesfully. i will ASAP hold on</p>}
        {error && <p style={{ textAlign: "center", color: "red", marginTop: "10px" }}>Error: {error}</p>}

        {pathname == '/work' && (
          <a href="#" className="chat-pill">
            <span style={{ fontSize: 15 }}>💬</span>
            want to chat about this?
          </a>
        )}
      </div>
    </>
  );
}
