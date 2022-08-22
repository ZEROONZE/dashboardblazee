import styled from "styled-components";

export const Container = styled.div`


.whatsapp_float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 60px;
          right: 60px;
          background-color: #25d366;
          color: #FFF;
          border-radius: 50%;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 3px #999;
          z-index: 100;
      }
      .whatsapp-icon {
          margin-top: 16px;
      }
      @media screen and (max-width: 767px) {
          .whatsapp-icon {
              margin-top: 10px;
          }

          .whatsapp_float {
              width: 40px;
              height: 40px;
              bottom: 20px;
              right: 10px;
              font-size: 22px;
          }
      }

`;
