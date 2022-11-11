import React from 'react';
import {
  CreateWalletContainer,
  CreateWalletWrapper,
} from './CreateWalletModal.style';
import Cancel from '../../../assests/images/x.svg';
import MetaMask from '../../../assests/images/meta_mask_face.svg';
import DownChev from '../../../assests/images/down_chev.svg';
import Wallet from '../../../assests/images/wallet_connect.svg';

const CreateWalletModal = ({ func }) => {
  const handleRedirection = () => {
    func();
    // Redirection code
  };
  return (
    <CreateWalletContainer>
      <CreateWalletWrapper>
        <div className="header">
          <h3>Connect Wallet</h3>
          <div className="cancel-container" onClick={() => func()}>
            <img src={Cancel} alt="Cancel button" />
          </div>
        </div>
        <hr />
        <section className="content">
          <p>Choose your preferred wallet:</p>

          <div className="card" onClick={() => handleRedirection()}>
            <div className="img-container">
              <img src={MetaMask} alt="Cancel button" />
              <p>Metamask</p>
            </div>

            <div className="chev">
              <img src={DownChev} alt="Cancel button" />
            </div>
          </div>

          <div className="card" onClick={() => handleRedirection()}>
            <div className="img-container">
              <img src={Wallet} alt="Cancel button" />
              <p>WalletConnect</p>
            </div>

            <div className="chev">
              <img src={DownChev} alt="Cancel button" />
            </div>
          </div>
        </section>
      </CreateWalletWrapper>
    </CreateWalletContainer>
  );
};

export default CreateWalletModal;
