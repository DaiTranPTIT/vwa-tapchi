import styled from "styled-components";

export default ({ handleClose }: any) => {
  return (
    <TagQuangCao>
      <div className="flex items-center gap-[16px]">
        <div className="flex items-center gap-[8px]">
          <strong>Quảng cáo</strong>
          <div className="tag">Ads</div>
        </div>
        <button className="close" onClick={handleClose}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.56977 0.428532C9.80642 0.665203 9.80642 1.04892 9.56977 1.28559L1.28549 9.57051C1.04884 9.80718 0.665149 9.80718 0.428497 9.57051C0.191845 9.33383 0.191845 8.95012 0.428498 8.71344L8.71277 0.428532C8.94943 0.191862 9.33312 0.191862 9.56977 0.428532Z"
              fill="#2387E3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.5702 9.57147C9.33354 9.80814 8.94985 9.80814 8.7132 9.57147L0.428925 1.28656C0.192272 1.04989 0.192272 0.666169 0.428925 0.429499C0.665577 0.192828 1.04927 0.192829 1.28592 0.429499L9.5702 8.71441C9.80685 8.95108 9.80685 9.3348 9.5702 9.57147Z"
              fill="#2387E3"
            />
          </svg>
        </button>
      </div>
    </TagQuangCao>
  );
};

const TagQuangCao = styled.div`
  color: white;
  .tag {
    background-color: white;
    padding: 2px 8px;
    border-radius: 2px;
    color: var(--text-main);
    font-size: 12px;
    font-weight: 400;
    line-height: 16.2px;
    letter-spacing: -0.01em;
    text-align: left;
  }

  .close {
    background-color: white;
    padding: 7px;
    border-radius: 2px;
    transition: all 0.2s ease;
  }

  .close:hover {
    background-color: black;
  }
`;
