import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../data/mockData';
import { X, CheckCircle, Truck, ShieldCheck, MapPin, CreditCard, Banknote } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
  currentCurrency: Currency;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
  currentCurrency
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'bank'>('cod');
  const [formData, setFormData] = useState({
    fullName: 'Sana Fatima',
    email: 'sanafatimahr1@gmail.com',
    phone: '+92 300 1234567',
    address: 'House 42, Street 7, Sector F-8/3',
    city: 'Islamabad',
    province: 'Federal Capital',
    postalCode: '44000',
    notes: 'Please call before dispatching courier.'
  });
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD_PKR = 15000;
  const subtotalPKR = items.reduce((sum, item) => sum + item.product.pricePKR * item.quantity, 0);
  const isFreeShipping = subtotalPKR >= FREE_SHIPPING_THRESHOLD_PKR;
  const shippingFeePKR = isFreeShipping ? 0 : 600;
  const grandTotalPKR = subtotalPKR + shippingFeePKR;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const generatedOrder = `RW-PK-${randomNum}`;
    setOrderNumber(generatedOrder);
    setStep('success');
    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EDE4DC] relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#EDE4DC] hover:bg-[#D9C4B3] text-[#2C2420] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8">
            
            {/* Header */}
            <div className="border-b border-[#EDE4DC] pb-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E4733] font-bold block mb-1">
                Express Checkout
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#221B17]">
                Shipping & Payment Details
              </h2>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Customer Contact */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-[#5C4D44] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9E4733]" />
                  <span>Contact Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#705F55] block mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FDFBF7] text-xs px-3 py-2 border border-[#D9C4B3] rounded focus:outline-none focus:border-[#9E4733]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#705F55] block mb-1">Email for Receipt</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FDFBF7] text-xs px-3 py-2 border border-[#D9C4B3] rounded focus:outline-none focus:border-[#9E4733]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-[#705F55] block mb-1">Mobile Number (For Courier SMS)</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FDFBF7] text-xs px-3 py-2 border border-[#D9C4B3] rounded focus:outline-none focus:border-[#9E4733]"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-3 pt-2 border-t border-[#EDE4DC]">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-[#5C4D44] flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#10342F]" />
                  <span>Delivery Address</span>
                </h3>

                <div>
                  <label className="text-[11px] font-medium text-[#705F55] block mb-1">Street Address / House No.</label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#FDFBF7] text-xs px-3 py-2 border border-[#D9C4B3] rounded focus:outline-none focus:border-[#9E4733]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#705F55] block mb-1">City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#FDFBF7] text-xs px-3 py-2 border border-[#D9C4B3] rounded focus:outline-none focus:border-[#9E4733]"
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Quetta">Quetta</option>
                      <option value="Sialkot">Sialkot</option>
                      <option value="Other">Other Cities / International</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#705F55] block mb-1">Province / Region</label>
                    <input
                      type="text"
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full bg-[#FDFBF7] text-xs px-3 py-2 border border-[#D9C4B3] rounded focus:outline-none focus:border-[#9E4733]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#705F55] block mb-1">Postal Code</label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-[#FDFBF7] text-xs px-3 py-2 border border-[#D9C4B3] rounded focus:outline-none focus:border-[#9E4733]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3 pt-2 border-t border-[#EDE4DC]">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-[#5C4D44] flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#9E4733]" />
                  <span>Select Payment Method</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[#9E4733] bg-[#FAF1ED]' : 'border-[#EDE4DC] bg-[#FDFBF7]'}`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-[#9E4733]"
                    />
                    <div>
                      <div className="flex items-center gap-1 font-semibold text-xs text-[#221B17]">
                        <Banknote className="w-3.5 h-3.5 text-[#9E4733]" />
                        <span>Cash on Delivery</span>
                      </div>
                      <span className="text-[10px] text-[#705F55]">Pay upon home receipt</span>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[#9E4733] bg-[#FAF1ED]' : 'border-[#EDE4DC] bg-[#FDFBF7]'}`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="text-[#9E4733]"
                    />
                    <div>
                      <div className="flex items-center gap-1 font-semibold text-xs text-[#221B17]">
                        <CreditCard className="w-3.5 h-3.5 text-[#10342F]" />
                        <span>Credit / Debit Card</span>
                      </div>
                      <span className="text-[10px] text-[#705F55]">Visa, Mastercard, PayPak</span>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'bank' ? 'border-[#9E4733] bg-[#FAF1ED]' : 'border-[#EDE4DC] bg-[#FDFBF7]'}`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="text-[#9E4733]"
                    />
                    <div>
                      <div className="flex items-center gap-1 font-semibold text-xs text-[#221B17]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#865427]" />
                        <span>Bank Transfer</span>
                      </div>
                      <span className="text-[10px] text-[#705F55]">Direct IBFT Account</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="bg-[#F2ECE5] p-4 rounded-lg space-y-2 text-xs">
                <div className="flex justify-between text-[#705F55]">
                  <span>Items Count:</span>
                  <span className="font-semibold text-[#2C2420]">{items.reduce((s, i) => s + i.quantity, 0)} garments</span>
                </div>
                <div className="flex justify-between text-[#705F55]">
                  <span>Subtotal:</span>
                  <span className="font-mono tabular-nums">{formatPrice(subtotalPKR, currentCurrency)}</span>
                </div>
                <div className="flex justify-between text-[#705F55]">
                  <span>Express Courier:</span>
                  <span className="text-[#10342F] font-semibold">{isFreeShipping ? 'FREE' : formatPrice(shippingFeePKR, currentCurrency)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#221B17] pt-2 border-t border-[#D9C4B3]">
                  <span>Total Amount Payable:</span>
                  <span className="font-serif text-base text-[#9E4733] tabular-nums">{formatPrice(grandTotalPKR, currentCurrency)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#9E4733] hover:bg-[#863826] text-[#FAF7F2] py-3.5 rounded text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer"
              >
                Confirm & Place Order ({formatPrice(grandTotalPKR, currentCurrency)})
              </button>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#10342F] text-[#F3C99F] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9E4733] font-bold">
                Shukriya · Thank You
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#221B17]">
                Your Order is Confirmed
              </h2>
              <p className="text-xs sm:text-sm text-[#705F55] max-w-md mx-auto">
                We have received your bespoke order. Our master artisans are preparing your heirloom pieces with utmost care.
              </p>
            </div>

            <div className="bg-[#FDFBF7] border border-[#EDE4DC] p-4 rounded-lg max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[#EDE4DC]">
                <span className="text-[#7A6B62]">Order Number:</span>
                <span className="font-mono font-bold text-[#9E4733]">{orderNumber}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#EDE4DC]">
                <span className="text-[#7A6B62]">Payment Method:</span>
                <span className="font-medium capitalize text-[#2C2420]">{paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'card' ? 'Online Card' : 'Bank Transfer'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#EDE4DC]">
                <span className="text-[#7A6B62]">Delivery To:</span>
                <span className="font-medium text-[#2C2420]">{formData.city}, Pakistan</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7A6B62]">Estimated Delivery:</span>
                <span className="font-medium text-[#10342F]">2 – 3 Business Days</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-[#9E4733] hover:bg-[#863826] text-[#FAF7F2] px-8 py-3 rounded text-xs font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
