import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ image, name, email, phone }) => {
  return (
    <div className="UserInfo">
      <img className="profile" src={image} alt="userProfile" />
      <h3 className="name">{name}</h3>
      <h5 className="email">{email}</h5>
      <h5 className="contact">{phone}</h5>
      <button className="btnAddInterest">
        <i className="fas fa-plus-square" />
        관심사 선택하기
        <i className="fas fa-angle-right" />
      </button>
    </div>
  );
};

export default UserInfo;