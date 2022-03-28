/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { CForm, CFormLabel, CFormInput, CButton } from "@coreui/react";
import useTodoStore from "../../store";

export default function AddTodo()
{
    const route = useRouter();
    const store = useTodoStore((state) => state);
    const [data, setData] = useState({ title: '' });

    const handleSubmit = () => {
        store.addTodo(data);
        route.push('/todo');
    }

    return (
        <div css={css`
            width: 500px;
            margin-left: 25%;
            margin-top: 20px;
        `}>
            <CForm>
                <div className="mb-3">
                    <CFormLabel htmlFor="title">Title</CFormLabel>
                    <CFormInput type="text" id="title" placeholder="input your title" onChange={(e) => setData({ title: e.target.value })} value={data.title || ''}/>
                </div>
                <div className="mb-3">
                    <CButton type="submit" onClick={handleSubmit}>Submit</CButton>
                </div>
            </CForm>
        </div>
    )    
}