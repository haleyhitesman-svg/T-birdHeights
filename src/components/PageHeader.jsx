export default function PageHeader({ tag, title, subtitle }) {
  return (
    <div className="page-header">
      <div className="container">
        {tag && <div className="section-tag page-header-tag">{tag}</div>}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}
