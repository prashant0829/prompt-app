import Link from "next/link";

const Form = ({ ...props }) => {
  return (
    <section className="w-full m-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{props.type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {props.type} and share your prompts with the world, and let your
        imagination run wild witha any AI-powered platform.
      </p>
      <form
        onSubmit={props.handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={props.post.prompt}
            onChange={(e) =>
              props.setPost({ ...props.post, prompt: e.target.value })
            }
            placeholder="Write you prompt here..."
            className="form_textarea"></textarea>
        </label>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            value={props.post.tag}
            onChange={(e) =>
              props.setPost({ ...props.post, tag: e.target.value })
            }
            required
            placeholder="#tag"
            className="form_input"></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={props.submitting}>
            {props.submitting ? `${props.type}...` : props.type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
