
export interface WishRequest {
  target: string;
  tone: string;
  topic: string;
  length: string;
}

export interface CompatibilityResult {
  year: number;
  zodiac: string;
  score: number;
  reason: string;
}

export enum Zodiac {
  Ty = 'Tý',
  Suu = 'Sửu',
  Dan = 'Dần',
  Mao = 'Mão',
  Thin = 'Thìn',
  Ty_Snake = 'Tỵ',
  Ngo = 'Ngọ',
  Mui = 'Mùi',
  Than = 'Thân',
  Dau = 'Dậu',
  Tuat = 'Tuất',
  Hoi = 'Hợi'
}
