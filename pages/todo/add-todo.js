/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { CForm, CFormLabel, CFormInput } from "@coreui/react";
import useTodoStore from "../../store";

export default function AddTodo()
{
    const route = useRouter();
    const store = useTodoStore((state) => state);
    const [title, setTitle] = useState();

    return (
        <div css={css`
            width: 500px;
            margin-left: 25%;
            margin-top: 20px;
        `}>
            <CForm>
                <div className="mb-3">
                    <CFormLabel htmlFor="title">Title</CFormLabel>
                    <CFormInput type="text" id="title" placeholder="input your title" onChange={(e) => setTitle({ title: e.target.value })} value={title}/>
                </div>
            </CForm>
        </div>
    )    
}