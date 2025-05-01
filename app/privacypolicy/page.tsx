import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto pt-5 flex-1 w-full">
      <h1 className="text-3xl font-bold mb-4">Synaptic AI Privacy Policy</h1>
      <p className="mb-4">
        Synaptic AI (“we,” “us,” or “our”) respects your privacy and is
        committed to protecting it through this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="mb-4">
        We collect only the minimum data necessary to provide the extension’s
        core functionality, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Authentication tokens to connect your account</li>
        <li>Website content you choose to summarize</li>
        <li>Notes or summaries saved to your Synaptic AI dashboard</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your data solely to provide and improve Synaptic AI services. We
        do not collect or track your browsing history, personal information, or
        form inputs beyond the extension’s active use.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Sharing</h2>
      <p className="mb-4">
        We do not sell, trade, or share your information with third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Privacy Rights</h2>
      <p className="mb-4">
        You have the right to request deletion of your data or reach out with
        any privacy concerns.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:{" "}
        <a
          href="mailto:Psriraj1902@gmail.com"
          className="text-blue-600 underline"
        >
          Psriraj1902@gmail.com
        </a>
      </p>

      <p className="mt-6 text-sm text-gray-500">
        We comply with the{" "}
        <a
          href="https://developer.chrome.com/docs/webstore/program_policies/#user-data"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Chrome Web Store User Data Policy
        </a>
        .
      </p>
    </div>
  );
}
