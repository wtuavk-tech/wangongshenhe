import React from 'react';
import { X } from 'lucide-react';

interface OrderDetailModalProps {
  orderNo: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const OrderDetailModal: React.FC<OrderDetailModalProps> = ({ orderNo, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[900px] max-w-[95vw] p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>

        <h2 className="text-xl text-gray-700 mb-8">查看订单 {orderNo}</h2>

        <div className="space-y-6 text-sm">
          {/* Row 1 */}
          <div className="flex items-center">
            <div className="w-24 text-right pr-4 text-gray-600">分成:</div>
            <div className="mr-8 text-gray-600">不去除成本:0.2</div>
            <div className="w-24 text-right pr-4 text-gray-600">完工收入</div>
            <input type="text" defaultValue="240" className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-blue-500" />
          </div>

          {/* Row 2 */}
          <div className="flex items-center">
            <div className="w-24 text-right pr-4 text-red-500 font-medium">* <span className="text-gray-600 font-normal">总收款</span></div>
            <input type="text" defaultValue="300" className="border border-gray-300 rounded px-3 py-1.5 w-full mr-8 focus:outline-blue-500" />
            
            <div className="w-24 text-right pr-4 text-red-500 font-medium">* <span className="text-gray-600 font-normal">配件成本</span></div>
            <input type="text" defaultValue="30" className="border border-gray-300 rounded px-3 py-1.5 w-full focus:outline-blue-500" />
          </div>

          {/* Row 3 */}
          <div className="flex items-center">
            <div className="w-24 text-right pr-4 text-gray-600">业绩</div>
            <input type="text" defaultValue="60" disabled className="border border-gray-200 bg-gray-50 text-gray-500 rounded px-3 py-1.5 w-full mr-8" />
            
            <div className="w-24 text-right pr-4 text-gray-600">收款时间</div>
            <input type="text" placeholder="选择收款日期" className="border border-gray-300 rounded px-3 py-1.5 w-full focus:outline-blue-500 text-gray-400" />
          </div>

          {/* Row 4: Payment Records Label */}
           <div className="flex items-start mt-2">
            <div className="w-24 text-right pr-4 text-red-500 font-medium mt-2">* <span className="text-gray-600 font-normal">收款记录</span></div>
            <div className="flex-1">
                {/* Header for sub-table */}
                <div className="flex gap-4 mb-2 text-gray-500 text-xs">
                    <div className="w-32">收款方式</div>
                    <div className="w-24">业绩</div>
                    <div className="w-40">核销券码</div>
                    <div className="flex-1">收款时间</div>
                    <div className="w-32">备注</div>
                </div>
                {/* Input row */}
                <div className="flex gap-4 items-center">
                     <select className="border border-gray-300 rounded px-2 py-1.5 w-32 text-gray-600 bg-white">
                        <option>平台收款</option>
                     </select>
                     <input type="text" defaultValue="60" className="border border-gray-300 rounded px-2 py-1.5 w-24" />
                     <div className="flex items-center gap-2 w-40">
                        <input type="text" defaultValue="010396724" className="border border-gray-300 rounded px-2 py-1.5 w-24" />
                        <span className="text-blue-500 cursor-pointer text-xs">查看</span>
                     </div>
                     <div className="flex-1 relative">
                        <input type="text" defaultValue="2025-12-15 19:02:43" className="border border-gray-300 rounded px-2 py-1.5 w-full text-xs" />
                     </div>
                     <input type="text" defaultValue="平台300" className="border border-gray-300 rounded px-2 py-1.5 w-32" />
                </div>
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex items-center pt-2">
            <div className="w-24 text-right pr-4 text-gray-600">实付金额</div>
            <input type="text" defaultValue="0" className="border border-gray-300 rounded px-3 py-1.5 w-full mr-8 focus:outline-blue-500" />
            
            <div className="w-24 text-right pr-4 text-gray-600">垫付金额</div>
            <div className="w-full relative">
                <input type="number" defaultValue="0" className="border border-gray-300 rounded px-3 py-1.5 w-full focus:outline-blue-500" />
            </div>
          </div>

          {/* Footer Action Button */}
          <div className="flex justify-end pt-8 pb-2">
            <button 
                onClick={onConfirm}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm transition-colors shadow-sm"
            >
                确认修改
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};