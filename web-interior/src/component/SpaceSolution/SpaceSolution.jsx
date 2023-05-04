import React from "react";
import liveRom from "../../assets/img/liveRom.jpg.jpg";
import imgBeconcept from "../../assets/img/imgBeconcept.png";
import imgProject from "../../assets/img/imgProject.png";
import imgHotel from "../../assets/img/imgHotel.png";
import imgdesign from "../../assets/img/quy-trinh-thiet-ke-thi-cong-01-20211014035605 (1).png";
import imgStep from "../../assets/img/step_ldp_concept1-012-01-20220913013127.png";
import imgMap from "../../assets/img/imgMap.png";

import "./spaceSolution.scss";
export default function SpaceSolution() {
  return (
    <div className="wp-SpaceSolution">
      <img src={liveRom} />
      <div className="wp-info">
        <div className=" grid grid-cols-3 my-8 items-center">
          <div className=" title-div h-8"></div>
          <h1 className=" font-bold text-5xl text-orange-600 text-center ">
            Giới thiệu
          </h1>
          <div className="title-div h-8"></div>
        </div>
        <div>
          <p className="my-10">
            BECONCEPT là một thành viên của BEYOURs Holding Thương hiệu BEYOURs,
            được sáng lập bởi những con người tràn đầy nhiệt huyết & có chung
            niềm say mê về vẻ đẹp hoàn mỹ nhằm nâng cao chất lượng cuộc sống.
          </p>
          <p className="my-10">
            Chúng tôi chuyên Tư vấn - Thiết kế - Sản xuất - Thi công trọn gói
            nội thất cho căn hộ chung cư, biệt thự, nhà phố, văn phòng, nhà
            hàng, khách sạn,...
          </p>
          <p className="my-10">
            Với lợi thế sở hữu 2 Nhà máy hiện đại với quy trình được chuẩn hoá,
            chúng tôi còn đảm bảo những món đồ rời do chính tay những người thợ
            mộc lành nghề BECONCEPT làm ra có tiêu chuẩn chất lượng nhất, đúng
            kích thước chuẩn cho từng không gian của khách hàng.
          </p>
          <p className="my-10">
            Đội ngũ kiến trúc sư dày dặn kinh nghiệm & sự sáng tạo luôn không
            ngừng cầu thị học hỏi để nâng cao chuyên môn, tay nghề, thẩm mỹ quan
            để mang đến những sản phẩm đẹp mắt đặc biệt là hợp với tuổi tác,
            phong thuỷ của khách hàng.
          </p>
          <p className="my-10">
            Sự hài lòng của khách hàng là niềm tự hào & động lực để đội ngũ
            BECONCEPT ngày một vững tin trên hành trình phục vụ & tạo ra thật
            nhiều giá trị cho cuộc sống.
          </p>
        </div>

        <img src={imgBeconcept} alt="" />

        <div className=" grid grid-cols-3 my-8 items-center">
          <div className=" title-div h-6"></div>
          <h1 className=" font-bold text-4xl text-orange-600 text-center ">
            DỰ ÁN TIÊU BIỂU
          </h1>
          <div className="title-div h-6"></div>
        </div>
        <img src={imgProject} alt="" />
        <div className=" grid grid-cols-3 my-8 items-center">
          <div className=" title-div h-6"></div>
          <h1 className=" font-bold text-4xl text-orange-600 text-center ">
            CÔNG TRÌNH GIÁM ĐỐC DỰ ÁN PHỤ TRÁCH
          </h1>
          <div className="title-div h-6"></div>
        </div>
        <img src={imgHotel} alt="" />
        <div className=" grid grid-cols-3 my-8 items-center">
          <div className=" title-div h-6"></div>
          <h1 className=" font-bold text-4xl text-orange-600 text-center ">
            QUY TRÌNH TIẾP NHẬN THÔNG TIN KHÁCH HÀNG
          </h1>
          <div className="title-div h-6"></div>
        </div>
        <img src={imgdesign} alt="" />
        <div className=" grid grid-cols-3 my-8 items-center">
          <div className=" title-div h-6"></div>
          <h1 className=" font-bold text-4xl text-orange-600 text-center ">
            TẠI SAO BẠN NÊN CHỌN BECONCEPT
          </h1>
          <div className="title-div h-6"></div>
        </div>
        <img src={imgStep} alt="" />
        <div className=" grid grid-cols-3 my-8 items-center">
          <div className=" title-div h-6"></div>
          <h1 className=" font-bold text-4xl text-orange-600 text-center ">
            TẠI SAO BẠN NÊN CHỌN BECONCEPT
          </h1>
          <div className="title-div h-6"></div>
        </div>
        <img src={imgMap} alt="" />
      </div>
    </div>
  );
}
