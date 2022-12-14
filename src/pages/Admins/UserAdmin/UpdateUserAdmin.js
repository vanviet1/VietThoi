import React, { useEffect, useState } from 'react';
import { Form, Input, Select, } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserAdminById } from '../../../apis/userAdminApi';
import { updateUserAdminStart } from '../../../Redux/actions/userAdminAction';
import { toast } from 'react-toastify';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import './updateUserAdmin.scss'
import { actGetProfile, actLogin, actLoginSuccess } from '../../../Redux/actions/actionAuthAdmin';

const { Option } = Select;

const UpdateUserAdmin = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { id } = useParams();
    let history = useHistory();
    const [roles, setRole] = useState('');
    const userAdmin = JSON.parse(localStorage.getItem('userAdmin')) || null;

    useEffect(() => {
        getDataById(id)
    }, [id])

    const getDataById = async (id) => {
        try {
            const data = await getUserAdminById(id);
            setRole(data.role)
            data && form.setFieldsValue({
                fullname: data.fullname,
                email: data.email,
                password: data.password,
                birthday: data.birthday,
                address: data.address,
                phone: data.phone,
                avatar: data.avatar,
                gender: data.gender,
                role: data.role,
                id: data.id
            });
        } catch (error) {
            console.log(error);
        }
    }
    const onFinish = (values) => {
        const dataValue = {
            ...values,
            isUserAdmin: true
        }
        dispatch(updateUserAdminStart({ id, dataValue }));
        if (dataValue.id === userAdmin.id) {
            dispatch(actLoginSuccess(dataValue))
        }
        toast.success("Update user success");
        setTimeout(() => history.push('/adminUI/admins'), 500);
    };
    return (
        <>
            <TopPage title="Qu???n l?? t??i kho???n Admin" title1="C???p nh???t t??i kho???n" />
            <span className="back-admin-user" onClick={() => { history.push('/adminUI/admins') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay l???i
            </span>
            <h5 className="text-uppercase text-center mb-2 mt-3">c???p nh???t t??i kho???n</h5>
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-12">
                        <Form
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="id"
                            >
                                <Input type="hidden" />
                            </Form.Item>
                            <Form.Item
                                name="fullname"
                                rules={[
                                    {
                                        type: 'text'
                                    },
                                    {
                                        required: true,
                                        message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!',
                                    },
                                ]}
                            >
                                <Input placeholder="H??? v?? t??n *" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Email kh??ng d??ng ?????nh d???ng',
                                    },
                                    {
                                        required: true,
                                        message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password placeholder="M???t kh???u *" />
                            </Form.Item>
                            <Form.Item
                                name="birthday"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!',
                                    },

                                ]}
                            >
                                <Input type="date" placeholder="Ng??y sinh*" />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                rules={[

                                    {
                                        required: true,
                                        message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!',
                                    },
                                ]}
                            >
                                <Input placeholder="?????a ch??? *" />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!',
                                    },
                                ]}
                            >
                                <Input placeholder="S??? ??i???n tho???i *" />
                            </Form.Item>
                            <Form.Item
                                name="avatar"
                                rules={[

                                    {
                                        required: true,
                                        message: 'V??i l??ng ch???n h??nh ???nh!',
                                    },
                                ]}
                            >
                                <Input placeholder="H??nh ?????i di???n *" />
                            </Form.Item>
                            <Form.Item
                                name="education"
                                rules={[

                                    {
                                        type: "text",
                                        message: 'V??i l??ng ch???n h??nh ???nh!',
                                    },
                                ]}
                            >
                                <Input placeholder="Tr??nh ????? h???c v???n" />
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                        type: 'text',
                                    },
                                ]}
                            >
                                <Select placeholder="Vui l??ng ch???n gi???i t??nh">
                                    <Option value="Nam">Name</Option>
                                    <Option value="N???">N???</Option>
                                    <Option value="Kh??c">Kh??c</Option>
                                </Select>
                            </Form.Item>
                            {roles === "employee" ? (
                                <Form.Item
                                    name="role"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui l??ng ch???n quy???n!',
                                        },
                                    ]}
                                >
                                    <Select disabled placeholder="Vui l??ng ch???n ph??n quy???n *">
                                        <Option value="admin">Admin</Option>
                                        <Option value="manage">Manage</Option>
                                        <Option value="employee">Employee</Option>
                                    </Select>
                                </Form.Item>
                            ) : (
                                <Form.Item
                                    name="role"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui l??ng ch???n quy???n!',
                                        },
                                    ]}
                                >
                                    <Select placeholder="Vui l??ng ch???n ph??n quy???n *">
                                        <Option value="admin">Admin</Option>
                                        <Option value="manage">Manage</Option>
                                        <Option value="employee">Employee</Option>
                                    </Select>
                                </Form.Item>
                            )}
                            <div className="submit-create">
                                <button htmlType="submit">C???p nh???t</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UpdateUserAdmin;