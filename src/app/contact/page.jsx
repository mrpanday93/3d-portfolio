"use client";
import Fox from "@/models/Fox";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "@/components/loader";
import emailJS from "@emailjs/browser";


const Contact = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const { alert, showAlert, hideAlert } = useAlert();
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailJS.send(process.env.NEXT_PUBLIC_EJS_SERVICE_ID,process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID,{
      from_name: form.name,
      to_name: "Mohit Raj Panday",
      from_email: form.email,
      to_email: "webmaker.mrp@gmail.com",
      message: form.message
    },process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY).then(() => {
      setIsLoading(false);
      setCurrentAnimation("idle");
      console.log("OK");
    }).catch((e) => {
      setIsLoading(false);
      setCurrentAnimation("idle");
      console.log("FAILED", e);
    });      
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleFormChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              name="email"
              type="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleFormChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              rows={4}
              name="message"
              className="input"
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleFormChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending ..." : "Send message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.65, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
