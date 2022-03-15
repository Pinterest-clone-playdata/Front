import React from 'react'

function Comment() {
    return (
        <div>
            <br />
            <p> 댓글</p>
            <hr />

            <form style={{ display: 'flex' }} onSubmit >
                <textarea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange
                    value
                    placeholder="댓글 작성"

                />
                <br />
                <button style={{ width: '20%', height: '52px' }}>댓글 작성</button>
            </form>
        </div>
    )
}

export default Comment