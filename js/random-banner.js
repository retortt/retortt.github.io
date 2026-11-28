(function () {
    // 首页随机 Banner 图片
    const bannerImages = [
        'http://blogsanctuary.oss-cn-beijing.aliyuncs.com/pages/fengmian1.jpg',
        'http://blogsanctuary.oss-cn-beijing.aliyuncs.com/pages/fengmian2.jpg',
        'http://blogsanctuary.oss-cn-beijing.aliyuncs.com/pages/fengmian3.jpg',
        'http://blogsanctuary.oss-cn-beijing.aliyuncs.com/pages/fengmian4.jpg'
    ];

    // 随机选择一张图片
    const randomIndex = Math.floor(Math.random() * bannerImages.length);
    const selectedImage = bannerImages[randomIndex];

    // 设置首页 Banner
    function changeBanner() {
        const banner = document.getElementById('page-header');

        if (banner) {
            banner.style.backgroundImage = `url("${selectedImage}")`;
        }
    }

    // 等待页面加载
    document.addEventListener('DOMContentLoaded', changeBanner);

    // 兼容 Butterfly 的 PJAX 页面切换
    document.addEventListener('pjax:complete', changeBanner);
})();