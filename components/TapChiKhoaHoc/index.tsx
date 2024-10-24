import styled from "styled-components";
import CardTinTuc2 from "../CardTinTuc2";

export default () => {
    return <BaiVietMoiNhatWrapper>
        <div className="list-posts">
            <div className="item">

            </div>

            <div className="item">
                <CardTinTuc2 data={undefined}/>
            </div>

            <div className="item">
                <CardTinTuc2 data={undefined}/>
            </div>

            <div className="item">
                <CardTinTuc2 data={undefined}/>
            </div>
        </div>

        <button onClick={() => {}}
                className={`button-outline`}
        >
            Xem thêm bài viết
        </button>
    </BaiVietMoiNhatWrapper>
}

const BaiVietMoiNhatWrapper = styled.div`
	.list-posts {
      gap: 20px;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      list-style-type: none;
      margin-bottom: 50px;
    }
`;