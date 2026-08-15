export default function Footer() {
  return (
    <footer className="border-t border-[rgba(143,170,200,0.08)] py-8">
      <div className="max-w-[1220px] mx-auto px-6 flex justify-center">
        <p
          className="text-sm font-semibold tracking-wide"
          style={{
            background: "linear-gradient(135deg, #4cc9f0 0%, #7ce8d4 50%, #7ae8af 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          I will be your better choice.
        </p>
      </div>
    </footer>
  );
}
