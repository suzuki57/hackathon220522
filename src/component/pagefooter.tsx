import React from 'react';
import Image from 'next/image';
import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon } from "react-share";
import { WindowResponse } from '@/hook/WindowsResponse';

export const PageFooter: React.FC = () => {
    const { width} = WindowResponse();
    return width >= 900 ? (
      <>
      <div className='w-full bg-orange text-white'>
        <div className='w-[90%] text-center mx-auto'>
          <div className='flex justify-between py-10'>
          <Image src={'/img/fwywd.png'} width={200} height={80} alt='ロゴ'></Image>
          <Image src={'/img/arrow.png'} width={50} height={80} alt='矢印'></Image>

          </div>
          <div className='flex justify-left'>
            <div className='text-left'>
          <ul className='text-white'>
            <li>キャッチフレーズ</li>
            <li>メリット</li>
            <li>レビュー</li>
            <li>キャッチフレーズ</li>
          </ul>
            </div>
            <div className='text-left pl-20'>
          <ul className='text-white'>
            <li>ご利用ガイド</li>
            <li>利用規約</li>
            <li>プライバシポリシー</li>
            <li>特定商取引法に基づく表記</li>
            <li>運営会社</li>
          </ul>
            </div>

          </div>
          <div className='grid grid-cols-2 gap-10 w-[20%] mx-auto'>
          <div>
        <TwitterShareButton url="https://prism-cube.com" title="ページタイトル"><TwitterIcon size={50} round={true} /></TwitterShareButton>

          </div>
          <div>
        <FacebookShareButton url="https://prism-cube.com" quote="ページタイトル"><FacebookIcon size={50} round={true} /></FacebookShareButton>

          </div>

          </div>
          <p>©2022_0522_ハッカソン</p>
        </div>

      </div>
      </>
  
    ):
    (
      <>
      <div className='w-full bg-orange text-white'>
        <div className='w-[90%] text-center mx-auto'>
          <div className='flex justify-between py-10'>
          <Image src={'/img/fwywd.png'} width={200} height={80} alt='ロゴ'></Image>
          <Image src={'/img/arrow.png'} width={50} height={80} alt='矢印'></Image>

          </div>
          <div className=''>
            <div className='text-left'>
          <ul className='text-white'>
            <li>キャッチフレーズ</li>
            <li>メリット</li>
            <li>レビュー</li>
            <li>キャッチフレーズ</li>
          </ul>
            </div>
            <div className='text-left pt-10'>
          <ul className='text-white'>
            <li>ご利用ガイド</li>
            <li>利用規約</li>
            <li>プライバシポリシー</li>
            <li>特定商取引法に基づく表記</li>
            <li>運営会社</li>
          </ul>
            </div>

          </div>
          <div className='grid grid-cols-2 gap-10 w-[20%] mx-auto pt-10'>
          <div>
        <TwitterShareButton url="https://prism-cube.com" title="ページタイトル"><TwitterIcon size={50} round={true} /></TwitterShareButton>

          </div>
          <div>
        <FacebookShareButton url="https://prism-cube.com" quote="ページタイトル"><FacebookIcon size={50} round={true} /></FacebookShareButton>

          </div>

          </div>
          <p>©2022_0522_ハッカソン</p>
        </div>

      </div>
      </>
    )
    };