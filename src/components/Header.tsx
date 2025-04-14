import { BranchesOutlined, FileTextOutlined } from "@ant-design/icons"
import Title from "antd/es/typography/Title"

export const Header = () => {
  return (
    <div className='header'>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <FileTextOutlined style={{ fontSize: "20px" }} />
        <Title level={3} style={{ margin: 0, color: "#24283B" }}>
          Flattenize JSON
        </Title>
      </div>
      <a style={{ display: "flex", alignItems: "center", gap: 5, color: "#24283B" }} href="https://github.com/josvaal/flattenize-json" target="_blank">
        <BranchesOutlined style={{ fontSize: "20px" }} />
        <Title level={4} style={{ margin: 0, color: "#24283B" }}>
          GitHub
        </Title>
      </a>
    </div>
  )
}
