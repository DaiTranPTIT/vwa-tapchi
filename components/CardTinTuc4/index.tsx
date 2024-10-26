import styled from "styled-components";

export default () => {
    return <CardTinTuc4Wrapper>
        <div className="card">
            <h2 className="title">
                Kỹ năng số tác động đến khả năng có việc làm của sinh viên tốt nghiệp trên địa bàn thành phố Hà Nội
            </h2>
            <p className="meta-date flex gap-[8px] items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.16536" cy="8.16658" r="6.83333" stroke="#777D93" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.16406 3.99988V8.20821L11.5807 8.20821" stroke="#777D93" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span>22/03/2024</span>
            </p>
        </div>
    </CardTinTuc4Wrapper>
}

const CardTinTuc4Wrapper = styled.div`
    .card {
      .title {
        font-size: 18px;
        font-weight: 700;
        line-height: 26.1px;
        letter-spacing: 0.01em;
        text-align: left;
        color: var(--text-primary);
        text-decoration: underline;
        margin-bottom: 8px;
      }
    }
`
