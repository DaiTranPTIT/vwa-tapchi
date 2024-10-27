import styled from "styled-components";
import React from "react";

export default () => {
    return <TapChiStickyWrapper>
        <div className="card-tapchi">
            <img width="100%" src={'/images/default/logo-tap-chi.jpg'}/>
        </div>
    </TapChiStickyWrapper>
}

const TapChiStickyWrapper = styled.div`
    .card-tapchi {
      border: 1px solid #F4F4F4;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 0px 4px 0px #1A1F6D40;
    }
`