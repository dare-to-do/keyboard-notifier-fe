import { create } from 'zustand';

type ModalType = 'group-buy-notification-subscribe-modal' | 'success-notification-alert-modal';

type ModalState = {
  isOpen: boolean;
  modalType: ModalType | null;
  productId: string;
  openModal: (type: ModalType, productId?: string) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  productId: '',
  openModal: (type, productId) => set({ isOpen: true, modalType: type, productId }),
  closeModal: () => set({ isOpen: false, modalType: null }),
}));
