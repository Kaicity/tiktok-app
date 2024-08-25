import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MenuItem.module.scss";
import classNames from "classnames/bind";
import { faCircleQuestion, faHouseFire, faLanguage, faMoon } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function MenuItem() {
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("list-items")}>
        <li className={cx("item")}>
          <FontAwesomeIcon icon={faHouseFire} />
          <span>Công cụ dành cho người sáng tạo</span>
        </li>
        <li className={cx("item")}>
          <FontAwesomeIcon icon={faLanguage} />
          <span>Tiếng Việt</span>
        </li>
        <li className={cx("item")}>
          <FontAwesomeIcon icon={faCircleQuestion} />
          <span>Phản hồi và trợ giúp</span>
        </li>
        <li className={cx("item")}>
          <FontAwesomeIcon icon={faMoon} />
          <span> Chế độ tối</span>
        </li>
      </ul>
    </div>
  );
}

export default MenuItem;
