import { toast } from 'vue-sonner';

export function toastIfEmpty(text: string) {
  if (!text.trim()) {
    toast.error('내용을 입력해주세요');
    return true;
  }
  return false;
}
