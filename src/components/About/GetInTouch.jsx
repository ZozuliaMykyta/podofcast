import React from "react";
import { useForm } from "react-hook-form";

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const SubmitData = () => {
    reset();
  };

  return (
    <section className="getInTouch">
      <div className="getInTouch__container container">
        <h2 className="getInTouch__title title">Get in touch</h2>
        <h6 className="getInTouch__sub-title sub-title">
          Send your message to us
        </h6>
        <form className="getInTouch__form" onSubmit={handleSubmit(SubmitData)}>
          <div className="getInTouch__form-cont">
            <div className="getInTouch__imput-cont">
              <h6 className="getInTouch__desc">Full name *</h6>
              <input
                className="getInTouch__input"
                type="text"
                placeholder="Porter Sev"
                {...register("firstName", { required: true, minLength: 3 })}
              />
              {errors.firstName && (
                <p className="getInTouch__error">The field must be filled</p>
              )}
            </div>
            <div className="getInTouch__imput-cont">
              <h6 className="getInTouch__desc">Email *</h6>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="getInTouch__input"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  },
                })}
              />
              {errors.email && (
                <p className="getInTouch__error">Incorrect email</p>
              )}
            </div>
            <div className="getInTouch__imput-cont">
              <h6 className="getInTouch__desc">Phone *</h6>
              <input
                className="getInTouch__input"
                type="tel"
                placeholder="Phone"
                {...register("phone", {
                  required: true,
                  pattern: {
                    value:
                      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  },
                })}
              />
              {errors.phone && (
                <p className="getInTouch__error">Incorrect phone number</p>
              )}
            </div>
            <div className="getInTouch__imput-cont">
              <h6 className="getInTouch__desc">Subject *</h6>
              <input
                className="getInTouch__input"
                type="text"
                placeholder="Subject..."
                {...register("subject", { required: true, minLength: 3 })}
              />
              {errors.subject && (
                <p className="getInTouch__error">The field must be filled</p>
              )}
            </div>
            <div className="getInTouch__imput-cont">
              <h6 className="getInTouch__desc">Message *</h6>
              <textarea
                className="getInTouch__input getInTouch__area"
                type="text"
                placeholder="Your message goes here..."
                {...register("text", { required: true, minLength: 3 })}
              />
              {errors.text && (
                <p className="getInTouch__error">The field must be filled</p>
              )}
            </div>
          </div>
          <div className="getInTouch__shadow-cont shadow-cont">
            <button type="submit" className="getInTouch__btn link-sha">
              send message
            </button>
            <div className="shadow"></div>
          </div>
          <span className="getInTouch__required">*required</span>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
