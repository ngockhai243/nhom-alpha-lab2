
import React from 'react';
import { Zodiac } from './types';

export const TET_INFO = {
  year: 2026,
  canChi: "Bính Ngọ",
  menh: "Thiên Hà Thủy (Nước trên trời)",
  tetDate: new Date("2026-02-17T00:00:00"),
  description: "Năm Bính Ngọ 2026 mang hình tượng con Ngựa chạy trên thảo nguyên. Đây là năm của sự bứt phá, năng lượng và tự do."
};

export const ZODIAC_LIST = [
  Zodiac.Ty, Zodiac.Suu, Zodiac.Dan, Zodiac.Mao, 
  Zodiac.Thin, Zodiac.Ty_Snake, Zodiac.Ngo, Zodiac.Mui, 
  Zodiac.Than, Zodiac.Dau, Zodiac.Tuat, Zodiac.Hoi
];

export const TONES = [
  { value: 'trang-trong', label: 'Trang trọng' },
  { value: 'vui-ve', label: 'Vui vẻ' },
  { value: 'hai-huoc', label: 'Hài hước' },
  { value: 'tinh-cam', label: 'Tình cảm' }
];

export const TARGETS = [
  { value: 'ong-ba', label: 'Ông bà' },
  { value: 'cha-me', label: 'Cha mẹ' },
  { value: 'sep', label: 'Cấp trên/Sếp' },
  { value: 'ban-be', label: 'Bạn bè' },
  { value: 'nguoi-yeu', label: 'Người yêu' },
  { value: 'khach-hang', label: 'Khách hàng' }
];

export const LENGTHS = [
  { value: 'ngan', label: 'Ngắn' },
  { value: 'vua', label: 'Vừa' },
  { value: 'dai', label: 'Dài' }
];
