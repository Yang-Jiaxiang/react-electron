import { Space, Table, Tag } from 'antd'

export const ClubSqlLabel = [
  {
    title: '社團代碼',
    dataIndex: 'cID',
    key: 'cID',
    type: 'text'
  },
  {
    title: '社團名稱',
    dataIndex: 'cName',
    key: 'cName',
    type: 'text'
  },
  {
    title: '姓名',
    dataIndex: 'Name',
    key: 'Name',
    width: 100,
    fixed: 'left',
    type: 'text'
  },
  {
    title: '身分證',
    dataIndex: 'tID',
    key: 'tID',
    width: 100,
    type: 'text'
  },
  {
    title: '學校老師',
    dataIndex: 'School',
    key: 'School',
    type: 'selection',
    selection: [
      { label: 1, value: '校外' },
      { label: 2, value: '校內' }
    ],
    render: text => (
      <>
        {text == '2' ? <Tag color="red">是</Tag> : <Tag color="green">否</Tag>}
      </>
    )
  },
  {
    title: '連絡電話',
    dataIndex: 'Phone',
    key: 'Phone',
    type: 'text'
  },
  {
    title: '信箱',
    dataIndex: 'Email',
    key: 'Email',
    type: 'email'
  },
  {
    title: '銀行帳號',
    dataIndex: 'BankAccount',
    key: 'BankAccount',
    type: 'number'
  },
  {
    title: '銀行名稱',
    dataIndex: 'BankName',
    key: 'BankName',
    type: 'text'
  },
  {
    title: '戶籍地',
    dataIndex: 'Residence',
    key: 'Residence',
    type: 'text'
  },
  {
    title: '住址',
    dataIndex: 'Dwelling',
    key: 'Dwelling',
    type: 'text'
  },
  {
    title: '付款單位',
    dataIndex: 'Unit',
    key: 'Unit',
    type: 'text'
  },
  {
    title: '總金額',
    dataIndex: 'UnitSum',
    key: 'UnitSum',
    type: 'number'
  },
  {
    title: '價錢',
    dataIndex: 'Price',
    key: 'Price',
    type: 'number'
  },
  {
    title: '代扣所得稅',
    dataIndex: 'Customs',
    key: 'Customs',
    type: 'number'
  },
  {
    title: '免稅給付',
    dataIndex: 'Ncustoms',
    key: 'Ncustoms',
    type: 'text'
  },
  {
    title: '出生',
    dataIndex: 'Birthday',
    key: 'Birthday',
    type: 'dateTime'
  },
  {
    title: '學校老師地址',
    dataIndex: 'SchoolClass',
    key: 'SchoolClass',
    type: 'text'
  },
  {
    title: '學歷',
    dataIndex: 'AcademicQualifications',
    key: 'AcademicQualifications',
    type: 'text'
  },
  {
    title: '經歷',
    dataIndex: 'Experience',
    key: 'Experience',
    type: 'text'
  },
  {
    title: '異動狀態',
    dataIndex: 'ChangeState',
    key: 'ChangeState',
    type: 'selection',
    selection: [
      { label: 1, value: '保留' },
      { label: 2, value: '移除' }
    ]
  }
]