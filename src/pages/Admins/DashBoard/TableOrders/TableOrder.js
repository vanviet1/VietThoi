import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadOrderStart } from '../../../../Redux/actions/orderAction';
import './tableorder.scss'

const TableOrder = () => {
    const { orders } = useSelector(state => state.orders)
    const dispatch = useDispatch();
    const [bottom, setBottom] = useState('bottomCenter');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    useEffect(() => {
        dispatch(loadOrderStart());
    }, [])

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const newOrders = orders.filter(item => item.status === "Ch??? x??c nh???n");
    const ordersNew = (newOrders).reduceRight(function (previous, current) {
        previous.push(current);
        return previous;
    }, []);

    const columns = [
        {
            title: 'Th??ng tin li??n h???',
            dataIndex: '',
            key: '',
            width: '20%',
            ...getColumnSearchProps('phoneNumber'),
            sorter: (a, b) => a.fullname.length - b.fullname.length,
            render: (item) => {
                return (
                    <>
                        <p ><span>T??n:</span> {item.fullname}</p>
                        <p><span>S??? ??T:</span> {item.phoneNumber}</p>
                    </>
                )
            },
        },
        {
            title: '?????a ch???',
            dataIndex: 'address',
            key: 'address',
            width: '20%',
        },
        {
            title: 'T???ng ti???n (vn??)',
            dataIndex: '',
            key: '',
            width: '15%',
            sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
            render: (item) => {
                return (
                    <>
                        {Number(item.totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                    </>
                )
            }
        },
        {
            title: 'Tr???ng th??i',
            dataIndex: '',
            key: '',
            width: '15%',
            filters:
                [
                    {
                        text: 'Ch??? x??c nh???n',
                        value: 'Ch??? x??c nh???n',
                    },
                    {
                        text: '??ang chu???n b???',
                        value: '??ang chu???n b???',
                    },
                    {
                        text: '??ang v???n chuy???n',
                        value: '??ang v???n chuy???n',
                    },
                    {
                        text: 'Giao th??nh c??ng',
                        value: 'Giao th??nh c??ng',
                    },
                    {
                        text: '???? h???y',
                        value: '???? h???y',
                    },
                ],
            // filteredValue: filteredInfo.status || null,
            onFilter: (value, record) => record.status.includes(value),
            render: (item) => {
                const checkStatus = () => {
                    if (item.status === "Ch??? x??c nh???n") { return "New" }
                    else if (item.status === "??ang chu???n b???") { return "Prepare" }
                    else if (item.status === "??ang v???n chuy???n") { return "Delivering" }
                    else if (item.status === "Giao th??nh c??ng") { return "Success" }
                    else if (item.status === "???? h???y") { return "Destroy" }
                }
                return (
                    <>
                        <span
                            className={checkStatus()}
                        >
                            {item.status}
                        </span>
                    </>
                )
            }
        },
        {
            title: 'Th???i gian ?????t',
            dataIndex: 'createAt',
            key: 'createAt',
            width: '15%',
            sorter: (a, b) => a.fullname.length - b.fullname.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            dataIndex: '',
            key: '',
            render: (item) => {
                return (
                    <>
                        <Link to={`/adminUI/orders/edit/${item.id}`}>
                            <button className="btn btn-sm bg-primary text-white  mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                        </Link>
                        <Link to={`/adminUI/orders/detail/${item.id}`}>
                            <button className="btn btn-sm bg-info text-white px-2 ">
                                <i className="fas fa-info-circle"></i>
                            </button>
                        </Link>

                    </>
                )
            },

        },
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={ordersNew}
                rowKey='id'
                pagination={{
                    position: [bottom],
                    pageSize: [5]
                }}
                onChange={handleChange}
                scroll={{
                    x: 900,
                }}
            />

        </>
    );
}

export default TableOrder;
