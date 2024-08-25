import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_300x300.webp?lk3s=a5d48078&nonce=66392&refresh_token=d4d468b3416d65d3fa36d51154d92895&x-expires=1724688000&x-signature=SByd1X8HkeJkFEM4ZU7hPCN5me0%3D&shp=a5d48078&shcp=c1333099s"
        alt="Minh Thong"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn Minh Thông</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Kaicity</span>
      </div>
    </div>
  );
}

export default AccountItem;
