import React from "react";
import imgFun from "../../assets/img/imgFun.jpg";
import imgMember from "../../assets/img/imgMember.jpg";
import titleImg from "../../assets/img/titleImg.jpg";
import imgAmedica from "../../assets/img/imgAmedica.jpg";
import "./About.scss";
export default function About() {
  return (
    <>
      <div className="wp-SpaceSolution">
        <img src={titleImg} alt="" />
        <div className=" grid grid-cols-3 my-8 items-center">
          <div className=" title-div h-8"></div>
          <h1 className=" font-bold text-5xl text-orange-600 text-center ">
            Về Chúng Tôi
          </h1>
          <div className="title-div h-8"></div>
        </div>
        <p className="my-10 text-center">
          BEYOURs định vị mình là một Nhãn hàng nội thất của người Việt, cung
          cấp đa dạng các sản phẩm nội thất trang trí & gia dụng.
        </p>
        <img src={imgFun} alt="" className="imgFun"/>
        <p className="my-10">
          BEYOURs định vị mình là một Nhãn hàng nội thất của người Việt, cung
          cấp đa dạng các sản phẩm nội thất trang trí & gia dụng. BEYOURs cho
          rằng một không gian sống đẹp sẽ nuôi dưỡng ước mơ và đem đến hạnh phúc
          thực sự cho chủ nhân. Vì vậy, chúng mình ở đây đơn giản là để chia sẻ
          đam mê về ngành nội thất, về làm đẹp nhà cửa với những người có cùng
          sở thích . Để làm được điều đó, tận dụng lợi thế về chuyên môn ngành &
          cơ sở vật chất, BEYOURs luôn cố gắng hoàn thiện mỗi ngày để có thể
          sáng tạo & làm ra những sản phẩm mang lại giá trị tối đa cho mọi
          người, và từ đó lan toả được sở thích này đến thật nhiều người hơn
          nữa.
        </p>

        <img src={imgMember} alt="" />
        <p className="mt-10 mb-4">
          Trải qua 6 năm không ngừng học hỏi và phát triển, BEYOURs đã may mắn
          được phục vụ hơn 200.000 khách hàng nội địa thông qua các các kênh
          phân phối chính như:
        </p>
        <ul>
          <li>- Các chuỗi siêu thị lớn: Aeon, Lotte, Emart, Kohnan,...</li>
          <li>- Các đại lý trên toàn quốc.</li>
          <li>- Các kênh trực tuyến chính thức của Nhãn hàng.</li>
          <li>- Các kiến trúc sư, chủ dự án.</li>
        </ul>

        <img src={imgAmedica} alt="" />
        <p className="my-10">
          Với việc đầu tư bài bản vào 2 Nhà máy tổng diện tích khai thác hơn
          7000 m2 ( Bao gồm hàng hệ gỗ công nghiệp , và hệ gỗ tự nhiên), Nhà máy
          BEYOURs được kỳ vọng có thể đáp ứng được sản lượng, tiêu chuẩn cao của
          Nhãn hàng, và các nhà nhập khẩu.
        </p>
      </div>
    </>
  );
}
