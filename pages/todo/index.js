/** @jsxImportSource @emotion/react */

import { CButton, CFormCheck, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
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

    const handleCheck = (e, id) => {
        if (e.target.checked) {
            store.completeTodo(id);
        } else {
            store.unCompleteTodo(id);
        }
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
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {
                        store.todo.map(todos => (
                            <CTableRow key={todos.id}>
                                <CTableDataCell>{todos.title}</CTableDataCell>
                                <CTableDataCell><CFormCheck checked={todos.complete} onChange={(e) => handleCheck(e, todos.id)} /></CTableDataCell>
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