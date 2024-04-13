import MaxWidthWrapper from "~/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
