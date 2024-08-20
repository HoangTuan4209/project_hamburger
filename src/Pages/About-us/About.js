import React from 'react'
import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.titleTop}>giới thiệu</div>
                    <div className={styles.about}>
                        <div className={styles.title}>
                            <p>Giới thiệu BURGER KING®</p>
                        </div>
                        <div className={styles.desc}>
                            <p>Được thành lập vào năm 1954, BURGER KING® hiện là chuỗi nhà hàng thức ăn nhanh lớn nhất thế giới. Mỗi ngày, có hơn 11 triệu thực khách đến với các nhà hàng BURGER KING® trên khắp thế giới để thưởng thức các món ăn chất lượng cao, hương vị tuyệt hảo và giá cả phải chăng.</p>
                            <p>Dù ở đâu, BURGER KING® cũng luôn giữ đúng tinh thần Taste is King, làm hài lòng khẩu vị của thực khách khó tính nhất khi đến thưởng thức tại nhà hàng. Các cửa hàng của BURGER KING® cũng sẽ giữ vững phương châm phục vụ của BURGER KING® “những bữa ăn thân thiện với gia đình”, thể hiện qua đội ngũ nhân viên phục vụ được đào tạo chuyên nghiệp, nhanh chóng và thân thiện, không gian thoải mái, thiết kế nội thất hiện đại, những món ăn tươi ngon và nóng sốt, thức uống mát lạnh và an toàn vệ sinh tuyệt đối.</p>
                            <p>Phương châm của BURGER KING® là bất cứ ở đâu, vào thời điểm nào, chúng tôi đều phục vụ những chiếc bánh WHOPPER® ngon nhất thế giới cho đông đảo khách hàng sành điệu.</p>
                        </div>
                    </div>
                    <div className={styles.history}>
                        <div className={styles.title}>
                            <p>Lịch sử BURGER KING®</p>
                        </div>
                        <div className={styles.desc}>
                            <p>Tiền thân của BURGER KING® là Insta-Burger King, do Matthew Burns và Keith J. Kramer thành lập tại Florida, Mỹ vào năm 1953. Cách thức nấu ăn với chiếc vỉ Insta-Broiler cho ra những viên thịt có hương vị tuyệt hảo.</p>
                            <p>Năm 1954, David Edgerton và James McLamore mua lại chuỗi cửa hàng Insta- Burger King, đổi tên thành Burger King of Miami và sau đó là Tập đoàn Burger King. Họ vẫn dùng cách nướng lửa, nhưng thay chiếc vỉ Insta-Broiler bằng vỉ nướng lửa Flame-Broiler – tức là chiếc vỉ nướng ga được cơ giới hóa.</p>
                            <p>BURGER KING® hiện là chuỗi nhà hàng thức ăn nhanh lớn nhất thế giới. Mỗi ngày, có hơn 11 triệu thực khách đến với các nhà hàng BURGER KING® trên khắp thế giới để thưởng thức các món ăn chất lượng cao, hương vị tuyệt hảo và giá cả phải chăng.</p>
                        </div>
                    </div>
                    <div className={styles.introduceBKV}>
                        <div className={styles.title}>
                            <p>Giới thiệu BKV</p>
                        </div>
                        <div className={styles.desc}>
                            <p>BURGER KING® đã chọn Công ty TNHH DV Thực phẩm và Giải khát Việt Nam (thuộc Tập đoàn Imexpan Pacific) làm đối tác kinh doanh nhượng quyền chính thức tại VN. Nhiều năm qua, VFBS và BURGER KING®đã phát triển mạng lưới phân phối, nhà cung ứng vững chắc. Đồng thời huấn luyện họ các tiêu chuẩn nghiêm ngặt về chất lượng, an toàn vệ sinh thực phẩm. Nhân sự làm việc tại nhà hàng BURGER KING® phải qua khóa huấn luyện các cửa hàng BURGER KING® tại Mỹ và khu vực Đông Nam Á. Sau đó, phải đạt được giấy chứng nhận đào tạo loại ưu trở lên.</p>
                            <p>Tin rằng với chiến lược dài hạn đúng đắn, tư duy kinh doanh nhạy bén, VFBS có thể góp sức vào nhiều lĩnh vực như đào tạo, phát triển nhân sự, tìm địa điểm chiến lược, tiếp thị… Ngược lại, BURGER KING® sẽ hỗ trợ về chuyên môn, phát triển cơ cấu tổ chức và hệ thống điều hành.VFBS sẽ đầu tư vốn dự kiến cho hoạt động kinh doanh của BURGER KING® tại Việt Nam dự kiến khoảng 40 triệu USD và sẽ tăng hơn nữa nếu tìm được nhiều mặt bằng chiến lược</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About