/** @jsxImportSource @emotion/react */

import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import useTodoStore from "../../store";

export default function Todo()
{
    const route = useRouter();
    const store = useTodoStore((state) => state);

    const handleSubmit = () => {
        route.push('/todo/add-todo');
    }

    const handleDelete = (id) => {
        store.deleteTodo(id);
    }

    return (
        <div css={css`
            margin-top: 20px;
        `}>
            <CButton onClick={() => handleSubmit()} css={css`margin-left: 5px`}>Add New</CButton>
            <CTable css={css`margin-top: 10px`}>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell>Title</CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {
                        store.todo.map(todos => (
                            <CTableRow key={todos.id}>
                                <CTableDataCell>{todos.title}</CTableDataCell>
                                <CTableDataCell>
                                    <CButton type="submit" color="danger" onClick={() => handleDelete(todos.id)}>Delete</CButton>
                                </CTableDataCell>
                            </CTableRow>
                        ))
                    }
                </CTableBody>
            </CTable>
        </div>
    )
}