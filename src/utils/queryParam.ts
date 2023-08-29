/**
 * 获取url中param的值
 * 例如 https://www.baidu.com?word=hello&id=3
 * 通过queryParam获取word和id的值
 * queryParam(word) , queryParam(id)
*/

export const queryParam = (param?: string): string | null => {
    if(!param) return null
    const reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    const r = window.location.search.substr(1).match(reg);
    if (r != null)
        return encodeURIComponent(r[2]);
    return null;
}