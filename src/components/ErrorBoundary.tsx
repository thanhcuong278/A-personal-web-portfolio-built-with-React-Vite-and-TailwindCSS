import React from "react";

/**
 * ErrorBoundary — Catch runtime render errors and show a friendly message.
 */
type Props = { children: React.ReactNode };
type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: undefined };
  }

  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : String(error),
    };
  }

  componentDidCatch(error: unknown, info: any) {
    console.error("🧩 ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-gray-800 dark:text-gray-100">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
            Something went wrong 😢
          </h2>
          <p className="mt-2 text-sm opacity-90">{this.state.message}</p>
          <p className="mt-4 text-sm">
            Open the browser console (F12) for more details.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
          >
            🔄 Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
