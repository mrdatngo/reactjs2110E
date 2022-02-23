import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Input } from 'antd';

import { StudentsApi } from '../../../../apis'
import { getStudents } from '../../../../redux/actions/studentActions'
import { store } from '../../../../redux/store'
import { debounce } from '../../../../utils/helper';


const { Search } = Input

/**
* @author
* @function ListStudent
**/

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Classes',
        key: 'classes',
        dataIndex: 'classes',
        render: classes => (
            <>
                {classes && classes.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

export const ListStudent = (props) => {
    const [keyword, setKeyword] = useState("")
    const [pageSize] = useState(5)
    const [current, setCurrent] = useState(2)
    const [total, setTotal] = useState(0)
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // componentDidMount
    useEffect(() => {
        // getStudents({ _page: current, _limit: pageSize })
        store.subscribe(() => {
            let { list, isLoading, total } = store.getState().studentData.students
            setStudents(list)
            setIsLoading(isLoading)
            setTotal(total)
        })
    }, [])

    useEffect(() => {
        getStudents({ _page: current, _limit: pageSize, q: keyword })
    }, [current, pageSize])

    const onPageChange = (current) => {
        // set current
        setCurrent(current)
    }

    const search = (value) => {
        setCurrent(1)
        setKeyword(value)
        getStudents({ _page: 1, _limit: pageSize, q: value })
    }

    const searchDebounce = debounce(search, 500)

    const onSearchChange = event => {
        searchDebounce(event.target.value)
    }

    /*
    // call when anytime state(props) change => combine componenDidmount + componentDidUpdate
    // can replace for componentDidUpdate
    useEffect(() => {
        // console.log("Count: ", count)
    })

    // never do this
    // if (count > 0) {
    //     useEffect(() => {
    //         // console.log("Count: ", count)
    //     })
    // }

    // componentDidMount
    useEffect(() => {
        // console.log("Count: ", count)
        return () => {
            // componentWillUnMount
        }
    }, [])

    // watching count
    useEffect(() => {
        console.log("watching count")
        // open connect
        return () => {
            console.log("Component will update!")
            // close connect
        }
    }, [count])

    // watching students
    useEffect(() => {
        // console.log("watching students")
    }, [students])

    // componentDidMount
    // useEffect(() => {
    //     StudentsApi.listStudents().then(data => {
    //         console.log(data)
    //         setStudents(data)
    //     })
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [])

    // StudentsApi.listStudents().then(data => {
    //     console.log(data)
    //     setStudents(data)
    // })

    */
    return (
        <div>
            <Search placeholder="input search text" style={{ width: 200 }} onChange={onSearchChange} />
            <Table columns={columns} dataSource={students} loading={isLoading}
                pagination={{
                    pageSize,
                    current,
                    onChange: onPageChange,
                    total
                }}
            />
        </div>
    )
}
