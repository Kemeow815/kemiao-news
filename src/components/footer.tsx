export function Footer() {
  return (
    <>
      <a href={`${Homepage}/blob/main/LICENSE`} target="_blank">MIT LICENSE</a>
      <span>
        <span>Ke Miao News © 2025 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
    </>
  )
}
