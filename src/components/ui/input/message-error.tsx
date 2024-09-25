type MessageProps = {
  error: string | undefined
}

export function MessageError({ error }: MessageProps) {
  return <>{error && <p className="text-action-error mt-2">{error}</p>}</>
}
