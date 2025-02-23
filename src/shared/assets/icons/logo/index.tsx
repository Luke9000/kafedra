import styles from './styles.module.css';

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className={styles.wrapper} style={{display:'flex', justifyContent:'center'}}>
        <svg  width="100%" height="100%" viewBox="0 0 807 100" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M782.48 92.6041V63.355H788.152V82.6065L801.597 63.355H806.435V92.6041H800.764V73.6004L787.319 92.6041H782.48ZM794.577 61.7025C793.043 61.7025 791.695 61.4408 790.531 60.9176C789.395 60.3943 788.509 59.6231 787.874 58.6041C787.24 57.585 786.883 56.2906 786.803 54.7207H791.523C791.549 55.6296 791.853 56.3181 792.435 56.7863C793.017 57.2545 793.744 57.4886 794.616 57.4886C795.515 57.4886 796.229 57.2545 796.758 56.7863C797.287 56.3181 797.578 55.6296 797.631 54.7207H802.311C802.284 56.2906 801.94 57.585 801.279 58.6041C800.618 59.6231 799.719 60.3943 798.583 60.9176C797.446 61.4408 796.11 61.7025 794.577 61.7025Z" />
<path d="M749.805 92.6046V63.3555H755.476V82.607L768.921 63.3555H773.759V92.6046H768.088V73.6009L754.643 92.6046H749.805Z" />
<path d="M723.906 92.6046V63.3555H743.3V68.85H729.578V92.6046H723.906Z" />
<path d="M702.748 92.9336C699.866 92.9336 697.38 92.3001 695.292 91.0332C693.229 89.7663 691.643 88.0174 690.532 85.7865C689.448 83.5281 688.906 80.9392 688.906 78.0198C688.906 75.0453 689.461 72.4289 690.572 70.1705C691.709 67.9121 693.322 66.1632 695.411 64.9238C697.499 63.6569 699.985 63.0234 702.867 63.0234C705.722 63.0234 708.181 63.6431 710.243 64.8825C712.306 66.1219 713.892 67.857 715.003 70.0878C716.14 72.3187 716.708 74.9214 716.708 77.8959C716.708 80.8153 716.14 83.418 715.003 85.7039C713.892 87.9623 712.293 89.7388 710.204 91.0332C708.141 92.3001 705.656 92.9336 702.748 92.9336ZM702.827 87.3977C704.731 87.3977 706.277 86.9433 707.467 86.0344C708.657 85.1255 709.516 83.955 710.045 82.5229C710.6 81.0907 710.878 79.5897 710.878 78.0198C710.878 76.8631 710.719 75.7201 710.402 74.5909C710.111 73.4617 709.649 72.4426 709.014 71.5338C708.379 70.6249 707.547 69.9088 706.515 69.3855C705.484 68.8347 704.242 68.5593 702.787 68.5593C700.91 68.5593 699.377 69.0137 698.187 69.9226C696.997 70.8039 696.111 71.9607 695.529 73.3928C694.974 74.825 694.697 76.3535 694.697 77.9785C694.697 79.6035 694.974 81.132 695.529 82.5642C696.111 83.9963 696.997 85.1668 698.187 86.0757C699.403 86.9571 700.95 87.3977 702.827 87.3977Z" />
<path d="M657.293 92.7285V87.0687C658.192 87.0687 658.906 86.8897 659.435 86.5317C659.99 86.1737 660.4 85.6641 660.664 85.0031C660.955 84.3421 661.166 83.571 661.299 82.6896C661.431 81.9185 661.523 81.0922 661.576 80.2109C661.629 79.3296 661.656 78.4896 661.656 77.6908C661.682 76.8646 661.695 76.1348 661.695 75.5013L661.814 63.3555H681.724V92.6046H676.013V68.85H667.168L667.089 75.8318C667.063 77.9525 667.01 79.9493 666.93 81.8221C666.877 83.6674 666.666 85.3336 666.296 86.8209C665.952 88.2806 665.344 89.4924 664.471 90.4564C663.652 91.3101 662.687 91.9023 661.576 92.2328C660.492 92.5633 659.064 92.7285 657.293 92.7285Z" />
<path d="M639.295 92.9336C636.413 92.9336 633.927 92.3001 631.838 91.0332C629.776 89.7663 628.19 88.0174 627.079 85.7865C625.995 83.5281 625.453 80.9392 625.453 78.0198C625.453 75.0453 626.008 72.4289 627.119 70.1705C628.256 67.9121 629.869 66.1632 631.957 64.9238C634.046 63.6569 636.532 63.0234 639.414 63.0234C642.269 63.0234 644.728 63.6431 646.79 64.8825C648.853 66.1219 650.439 67.857 651.55 70.0878C652.686 72.3187 653.255 74.9214 653.255 77.8959C653.255 80.8153 652.686 83.418 651.55 85.7039C650.439 87.9623 648.839 89.7388 646.751 91.0332C644.688 92.3001 642.203 92.9336 639.295 92.9336ZM639.374 87.3977C641.278 87.3977 642.824 86.9433 644.014 86.0344C645.204 85.1255 646.063 83.955 646.592 82.5229C647.147 81.0907 647.425 79.5897 647.425 78.0198C647.425 76.8631 647.266 75.7201 646.949 74.5909C646.658 73.4617 646.195 72.4426 645.561 71.5338C644.926 70.6249 644.093 69.9088 643.062 69.3855C642.031 68.8347 640.788 68.5593 639.334 68.5593C637.457 68.5593 635.923 69.0137 634.734 69.9226C633.544 70.8039 632.658 71.9607 632.076 73.3928C631.521 74.825 631.244 76.3535 631.244 77.9785C631.244 79.6035 631.521 81.132 632.076 82.5642C632.658 83.9963 633.544 85.1668 634.734 86.0757C635.95 86.9571 637.497 87.3977 639.374 87.3977Z" />
<path d="M594.75 92.6046V63.3555H600.421V75.46H612.557V63.3555H618.269V92.6046H612.557V80.9132H600.421V92.6046H594.75Z" />
<path d="M562.707 92.6046L572.225 77.98L562.985 63.3555H569.846L575.835 73.6009L581.744 63.3555H588.486L579.245 77.9387L588.764 92.6046H581.903L575.636 82.3591L569.172 92.6046H562.707Z" />
<path d="M538.035 92.6046V63.3555H558.262V68.85H543.707V75.46H556.2V80.748H543.707V87.1514H558.262V92.6046H538.035Z" />
<path d="M517.617 92.6046V68.85H509.051V63.3555H531.935V68.85H523.328V92.6046H517.617Z" />
<path d="M465.656 92.6046L475.175 77.98L465.934 63.3555H472.795L478.784 73.6009L484.693 63.3555H491.435L482.195 77.9387L491.713 92.6046H484.852L478.585 82.3591L472.121 92.6046H465.656Z" />
<path d="M429.91 92.6046V63.3555H435.582V74.2206H439.746C441.068 74.2206 442.35 74.3583 443.593 74.6337C444.862 74.8816 445.999 75.336 447.004 75.997C448.035 76.6305 448.841 77.5256 449.423 78.6823C450.031 79.8115 450.335 81.2575 450.335 83.0201C450.335 84.8654 450.018 86.4078 449.383 87.6471C448.749 88.8865 447.889 89.8642 446.805 90.5803C445.721 91.2964 444.492 91.8197 443.117 92.1502C441.742 92.4531 440.314 92.6046 438.834 92.6046H429.91ZM435.582 87.1514H438.873C439.667 87.1514 440.42 87.0963 441.134 86.9861C441.848 86.876 442.469 86.6832 442.998 86.4078C443.553 86.1048 443.976 85.7054 444.267 85.2097C444.584 84.6864 444.743 84.0116 444.743 83.1854C444.743 82.3316 444.584 81.6706 444.267 81.2024C443.95 80.7067 443.527 80.3348 442.998 80.087C442.469 79.8391 441.874 79.6738 441.213 79.5912C440.552 79.5086 439.865 79.4673 439.151 79.4673H435.582V87.1514ZM453.944 92.6046V63.3555H459.655V92.6046H453.944Z" />
<path d="M397.656 92.6046V63.3555H403.328V75.46H415.464V63.3555H421.175V92.6046H415.464V80.9132H403.328V92.6046H397.656Z" />
<path d="M368.004 92.6046V63.3555H380.299C381.594 63.3555 382.771 63.4932 383.828 63.7686C384.912 64.0165 385.851 64.4296 386.644 65.008C387.437 65.5863 388.046 66.3575 388.469 67.3214C388.918 68.2854 389.143 69.511 389.143 70.9983C389.143 72.2101 388.878 73.3393 388.35 74.3859C387.821 75.4324 387.041 76.2311 386.01 76.782C387.385 77.2502 388.469 78.0764 389.262 79.2607C390.055 80.4175 390.452 81.9185 390.452 83.7638C390.452 85.4989 390.148 86.9448 389.539 88.1016C388.931 89.2308 388.098 90.1259 387.041 90.7869C385.983 91.4479 384.767 91.9161 383.392 92.1915C382.044 92.4669 380.616 92.6046 379.109 92.6046H368.004ZM373.675 87.1514H379.545C380.259 87.1514 380.92 87.0963 381.528 86.9861C382.163 86.876 382.718 86.6969 383.194 86.4491C383.67 86.1737 384.04 85.8018 384.304 85.3336C384.595 84.8654 384.741 84.2871 384.741 83.5985C384.741 82.9651 384.622 82.4418 384.384 82.0286C384.172 81.588 383.855 81.2299 383.432 80.9545C383.035 80.6791 382.559 80.4863 382.004 80.3762C381.475 80.266 380.88 80.2109 380.219 80.2109H373.675V87.1514ZM373.675 75.2947H378.871C379.585 75.2947 380.232 75.2259 380.814 75.0882C381.396 74.9505 381.885 74.7301 382.282 74.4272C382.678 74.1242 382.982 73.7662 383.194 73.3531C383.405 72.9124 383.511 72.3891 383.511 71.7832C383.511 70.9845 383.339 70.3786 382.995 69.9654C382.652 69.5248 382.176 69.2218 381.568 69.0566C380.986 68.8913 380.285 68.8087 379.466 68.8087H373.675V75.2947Z" />
<path d="M335.363 92.6046V63.3555H341.035V82.607L354.479 63.3555H359.318V92.6046H353.647V73.6009L340.202 92.6046H335.363Z" />
<path d="M314.949 92.6046V68.85H306.383V63.3555H329.267V68.85H320.66V92.6046H314.949Z" />
<path d="M276.324 92.6046V63.3555H281.996V82.607L295.44 63.3555H300.279V92.6046H294.608V73.6009L281.163 92.6046H276.324Z" />
<path d="M241.887 99.9995V87.1514C242.971 87.1514 243.777 86.8622 244.306 86.2838C244.835 85.7054 245.218 84.9894 245.456 84.1356C245.694 83.2542 245.879 82.3316 246.011 81.3677C246.17 80.4037 246.289 79.426 246.368 78.4345C246.448 77.443 246.501 76.479 246.527 75.5426C246.633 73.4219 246.712 71.3563 246.765 69.3458C246.818 67.3352 246.844 65.3385 246.844 63.3555H266.674V87.1514H270.045V99.9995H264.374V92.6046H247.558V99.9995H241.887ZM250.493 87.1514H261.003V68.85H252.079L251.881 78.0627C251.881 78.6135 251.855 79.2745 251.802 80.0456C251.775 80.7893 251.709 81.5742 251.603 82.4005C251.498 83.2267 251.352 84.0529 251.167 84.8792C251.009 85.7054 250.784 86.4628 250.493 87.1514Z" />
<path d="M207.934 99.9995V87.1514C209.018 87.1514 209.824 86.8622 210.353 86.2838C210.882 85.7054 211.265 84.9894 211.503 84.1356C211.741 83.2542 211.926 82.3316 212.058 81.3677C212.217 80.4037 212.336 79.426 212.415 78.4345C212.495 77.443 212.547 76.479 212.574 75.5426C212.68 73.4219 212.759 71.3563 212.812 69.3458C212.865 67.3352 212.891 65.3385 212.891 63.3555H232.721V87.1514H236.092V99.9995H230.421V92.6046H213.605V99.9995H207.934ZM216.54 87.1514H227.05V68.85H218.126L217.928 78.0627C217.928 78.6135 217.902 79.2745 217.849 80.0456C217.822 80.7893 217.756 81.5742 217.65 82.4005C217.545 83.2267 217.399 84.0529 217.214 84.8792C217.055 85.7054 216.831 86.4628 216.54 87.1514Z" />
<path d="M175.711 92.6046L186.657 63.3555H193.003L203.83 92.6046H197.722L195.977 87.6058H183.564L181.819 92.6046H175.711ZM185.388 82.2765H194.193L189.83 69.6349L185.388 82.2765Z" />
<path d="M132 92.6046V63.3555H137.671V82.607L151.116 63.3555H155.955V92.6046H150.283V73.6009L136.839 92.6046H132Z" />
<path d="M589.738 43.0304L599.257 28.4058L590.016 13.7812H596.877L602.866 24.0267L608.775 13.7812H615.517L606.277 28.3645L615.795 43.0304H608.934L602.668 32.7849L596.203 43.0304H589.738Z" />
<path d="M553.992 43.0304V13.7812H559.664V24.6464H563.828C565.15 24.6464 566.432 24.7841 567.675 25.0595C568.944 25.3074 570.081 25.7618 571.086 26.4228C572.117 27.0563 572.923 27.9514 573.505 29.1081C574.113 30.2373 574.417 31.6833 574.417 33.4459C574.417 35.2912 574.1 36.8335 573.465 38.0729C572.831 39.3123 571.971 40.29 570.887 41.0061C569.803 41.7222 568.574 42.2455 567.199 42.576C565.824 42.8789 564.396 43.0304 562.916 43.0304H553.992ZM559.664 37.5772H562.955C563.749 37.5772 564.502 37.5221 565.216 37.4119C565.93 37.3017 566.551 37.109 567.08 36.8335C567.635 36.5306 568.058 36.1312 568.349 35.6355C568.666 35.1122 568.825 34.4374 568.825 33.6112C568.825 32.7574 568.666 32.0964 568.349 31.6282C568.032 31.1324 567.609 30.7606 567.08 30.5127C566.551 30.2649 565.956 30.0996 565.295 30.017C564.634 29.9344 563.947 29.8931 563.233 29.8931H559.664V37.5772ZM578.026 43.0304V13.7812H583.737V43.0304H578.026Z" />
<path d="M524.336 43.0304V13.7812H536.631C537.926 13.7812 539.103 13.919 540.16 14.1944C541.244 14.4422 542.183 14.8554 542.976 15.4337C543.769 16.0121 544.378 16.7833 544.801 17.7472C545.25 18.7112 545.475 19.9368 545.475 21.424C545.475 22.6359 545.21 23.7651 544.682 24.8116C544.153 25.8582 543.373 26.6569 542.342 27.2078C543.717 27.676 544.801 28.5022 545.594 29.6865C546.387 30.8432 546.784 32.3443 546.784 34.1895C546.784 35.9247 546.48 37.3706 545.871 38.5273C545.263 39.6565 544.43 40.5516 543.373 41.2126C542.315 41.8736 541.099 42.3418 539.724 42.6173C538.376 42.8927 536.948 43.0304 535.441 43.0304H524.336ZM530.007 37.5772H535.877C536.591 37.5772 537.252 37.5221 537.86 37.4119C538.495 37.3017 539.05 37.1227 539.526 36.8748C540.002 36.5994 540.372 36.2276 540.636 35.7594C540.927 35.2912 541.073 34.7128 541.073 34.0243C541.073 33.3908 540.954 32.8676 540.716 32.4544C540.504 32.0138 540.187 31.6557 539.764 31.3803C539.367 31.1049 538.891 30.9121 538.336 30.8019C537.807 30.6918 537.212 30.6367 536.551 30.6367H530.007V37.5772ZM530.007 25.7205H535.203C535.917 25.7205 536.565 25.6517 537.146 25.514C537.728 25.3762 538.217 25.1559 538.614 24.853C539.01 24.55 539.314 24.192 539.526 23.7788C539.737 23.3382 539.843 22.8149 539.843 22.209C539.843 21.4103 539.671 20.8043 539.327 20.3912C538.984 19.9506 538.508 19.6476 537.9 19.4824C537.318 19.3171 536.617 19.2345 535.798 19.2345H530.007V25.7205Z" />
<path d="M503.216 43.3594C500.334 43.3594 497.849 42.7259 495.76 41.459C493.698 40.1921 492.112 38.4432 491.001 36.2123C489.917 33.9539 489.375 31.365 489.375 28.4456C489.375 25.4711 489.93 22.8547 491.041 20.5963C492.178 18.3378 493.791 16.589 495.879 15.3496C497.968 14.0827 500.453 13.4492 503.335 13.4492C506.191 13.4492 508.65 14.0689 510.712 15.3083C512.775 16.5476 514.361 18.2828 515.471 20.5136C516.608 22.7445 517.177 25.3472 517.177 28.3217C517.177 31.2411 516.608 33.8437 515.471 36.1297C514.361 38.3881 512.761 40.1645 510.673 41.459C508.61 42.7259 506.125 43.3594 503.216 43.3594ZM503.296 37.8235C505.199 37.8235 506.746 37.3691 507.936 36.4602C509.126 35.5513 509.985 34.3808 510.514 32.9486C511.069 31.5165 511.347 30.0155 511.347 28.4456C511.347 27.2889 511.188 26.1459 510.871 25.0167C510.58 23.8875 510.117 22.8684 509.483 21.9596C508.848 21.0507 508.015 20.3346 506.984 19.8113C505.953 19.2605 504.71 18.9851 503.256 18.9851C501.379 18.9851 499.845 19.4395 498.655 20.3484C497.466 21.2297 496.58 22.3865 495.998 23.8186C495.443 25.2508 495.165 26.7793 495.165 28.4043C495.165 30.0292 495.443 31.5578 495.998 32.99C496.58 34.4221 497.466 35.5926 498.655 36.5015C499.872 37.3828 501.418 37.8235 503.296 37.8235Z" />
<path d="M461.926 43.0304V13.7812H472.872C475.014 13.7812 476.878 14.1255 478.464 14.8141C480.077 15.4751 481.32 16.5492 482.192 18.0364C483.065 19.4961 483.501 21.4516 483.501 23.9028C483.501 26.1887 483.012 28.1029 482.034 29.6452C481.082 31.1875 479.773 32.3443 478.107 33.1154C476.441 33.859 474.551 34.2309 472.436 34.2309H467.597V43.0304H461.926ZM467.597 28.9429H472.356C474.049 28.9429 475.384 28.5298 476.362 27.7035C477.367 26.8497 477.869 25.569 477.869 23.8615C477.869 22.3191 477.446 21.1762 476.6 20.4325C475.78 19.6614 474.458 19.2758 472.634 19.2758H467.597V28.9429Z" />
<path d="M436.063 43.6082V39.0638H434.595C432.268 39.0363 430.233 38.5819 428.488 37.7005C426.769 36.8192 425.434 35.5385 424.482 33.8585C423.556 32.1784 423.094 30.1266 423.094 27.7029C423.094 25.2242 423.596 23.1448 424.601 21.4648C425.606 19.7847 426.98 18.5316 428.725 17.7054C430.471 16.8516 432.467 16.4247 434.714 16.4247H436.063V12.5H441.734V16.4247H442.924C445.171 16.4247 447.181 16.8516 448.952 17.7054C450.724 18.5591 452.125 19.8123 453.156 21.4648C454.214 23.1173 454.743 25.1691 454.743 27.6203C454.743 30.0715 454.28 32.1509 453.354 33.8585C452.429 35.5385 451.094 36.8192 449.349 37.7005C447.604 38.5819 445.528 39.0363 443.122 39.0638H441.734V43.6082H436.063ZM434.952 33.9824H436.063V21.5474H434.952C433.604 21.5474 432.454 21.809 431.502 22.3323C430.576 22.8556 429.862 23.5717 429.36 24.4806C428.884 25.3895 428.646 26.436 428.646 27.6203C428.646 28.8597 428.871 29.9613 429.32 30.9253C429.77 31.8617 430.457 32.6053 431.383 33.1562C432.335 33.707 433.524 33.9824 434.952 33.9824ZM441.734 33.9824H442.884C444.312 33.9824 445.489 33.707 446.414 33.1562C447.339 32.6053 448.027 31.8617 448.476 30.9253C448.926 29.9613 449.151 28.8597 449.151 27.6203C449.151 26.436 448.899 25.3895 448.397 24.4806C447.921 23.5717 447.22 22.8556 446.295 22.3323C445.37 21.809 444.219 21.5474 442.845 21.5474H441.734V33.9824Z" />
<path d="M391.965 43.0304V13.7812H397.636V33.0328L411.081 13.7812H415.92V43.0304H410.248V24.0267L396.803 43.0304H391.965Z" />
<path d="M380.021 50.4253V43.0304H359.715V13.7812H365.386V37.5772H376.729V13.7812H382.4V37.5772H385.732V50.4253H380.021Z" />
<path d="M311.84 43.0304L322.786 13.7812H329.132L339.959 43.0304H333.851L332.106 38.0316H319.693L317.948 43.0304H311.84ZM321.517 32.7023H330.322L325.959 20.0607L321.517 32.7023Z" />
<path d="M288.527 43.0304V13.7812H299.474C301.615 13.7812 303.479 14.1255 305.066 14.8141C306.679 15.4751 307.921 16.5492 308.794 18.0364C309.666 19.4961 310.102 21.4516 310.102 23.9028C310.102 26.1887 309.613 28.1029 308.635 29.6452C307.683 31.1875 306.374 32.3443 304.709 33.1154C303.043 33.859 301.153 34.2309 299.037 34.2309H294.199V43.0304H288.527ZM294.199 28.9429H298.958C300.65 28.9429 301.985 28.5298 302.964 27.7035C303.968 26.8497 304.471 25.569 304.471 23.8615C304.471 22.3191 304.048 21.1762 303.202 20.4325C302.382 19.6614 301.06 19.2758 299.236 19.2758H294.199V28.9429Z" />
<path d="M254.086 50.4253V37.5772C255.17 37.5772 255.976 37.288 256.505 36.7096C257.034 36.1312 257.417 35.4151 257.655 34.5614C257.893 33.68 258.078 32.7574 258.211 31.7934C258.369 30.8295 258.488 29.8517 258.568 28.8603C258.647 27.8688 258.7 26.9048 258.726 25.9684C258.832 23.8477 258.911 21.7821 258.964 19.7715C259.017 17.761 259.043 15.7642 259.043 13.7812H278.874V37.5772H282.245V50.4253H276.573V43.0304H259.757V50.4253H254.086ZM262.692 37.5772H273.202V19.2758H264.279L264.08 28.4884C264.08 29.0393 264.054 29.7003 264.001 30.4714C263.975 31.2151 263.908 32 263.803 32.8262C263.697 33.6525 263.552 34.4787 263.366 35.305C263.208 36.1312 262.983 36.8886 262.692 37.5772Z" />
<path d="M229.141 43.0304V13.7812H249.367V19.2758H234.812V25.8858H247.305V31.1737H234.812V37.5772H249.367V43.0304H229.141Z" />
<path d="M203.274 43.6082V39.0638H201.806C199.479 39.0363 197.444 38.5819 195.698 37.7005C193.98 36.8192 192.645 35.5385 191.693 33.8585C190.767 32.1784 190.305 30.1266 190.305 27.7029C190.305 25.2242 190.807 23.1448 191.812 21.4648C192.817 19.7847 194.191 18.5316 195.936 17.7054C197.681 16.8516 199.678 16.4247 201.925 16.4247H203.274V12.5H208.945V16.4247H210.135C212.382 16.4247 214.392 16.8516 216.163 17.7054C217.935 18.5591 219.336 19.8123 220.367 21.4648C221.425 23.1173 221.954 25.1691 221.954 27.6203C221.954 30.0715 221.491 32.1509 220.565 33.8585C219.64 35.5385 218.305 36.8192 216.56 37.7005C214.815 38.5819 212.739 39.0363 210.333 39.0638H208.945V43.6082H203.274ZM202.163 33.9824H203.274V21.5474H202.163C200.815 21.5474 199.664 21.809 198.713 22.3323C197.787 22.8556 197.073 23.5717 196.571 24.4806C196.095 25.3895 195.857 26.436 195.857 27.6203C195.857 28.8597 196.082 29.9613 196.531 30.9253C196.981 31.8617 197.668 32.6053 198.594 33.1562C199.546 33.707 200.735 33.9824 202.163 33.9824ZM208.945 33.9824H210.095C211.523 33.9824 212.699 33.707 213.625 33.1562C214.55 32.6053 215.238 31.8617 215.687 30.9253C216.137 29.9613 216.361 28.8597 216.361 27.6203C216.361 26.436 216.11 25.3895 215.608 24.4806C215.132 23.5717 214.431 22.8556 213.506 22.3323C212.581 21.809 211.43 21.5474 210.055 21.5474H208.945V33.9824Z" />
<path d="M158.527 43.0304L169.474 13.7812H175.819L186.646 43.0304H180.539L178.794 38.0316H166.38L164.635 43.0304H158.527ZM168.204 32.7023H177.009L172.646 20.0607L168.204 32.7023Z" />
<path d="M132 43.0304V13.7812H137.671V25.9271H141.677L148.975 13.7812H155.479L146.436 27.9927L155.439 43.0304H148.816L141.875 31.3803H137.671V43.0304H132Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 84.7744V72.1471L10.2817 61.8843C12.0284 60.1407 14.8603 60.1407 16.607 61.8843C18.3537 63.6277 18.3537 66.4546 16.607 68.1979L0 84.7744ZM16.239 99.9991H13.8993C8.33824 99.9991 3.53998 96.7333 1.31781 92.015L22.0965 71.2744C24.8147 68.5612 29.2222 68.5612 31.9404 71.2744L33.5565 72.8876C36.2747 75.6007 36.2747 80 33.5565 82.7134L16.239 99.9991ZM37.4467 99.9991H24.7961L39.5927 85.2297C41.3394 83.4863 44.1713 83.4863 45.9178 85.2297C47.6646 86.9733 47.6646 89.7999 45.9178 91.5435L37.4467 99.9991ZM68.8904 99.9991H45.9704L78.0373 67.9912C80.7557 65.2778 85.1629 65.2778 87.8814 67.9912L89.4972 69.6042C92.2157 72.3176 92.2157 76.7168 89.4972 79.4302L68.8904 99.9991ZM100 78.3378V86.0999C100 93.7762 93.7771 99.9991 86.1007 99.9991H77.4541L97.58 79.9103C98.2912 79.2004 99.118 78.6762 100 78.3378ZM100 15.6505V28.2779L89.7155 38.5435C87.9689 40.2869 85.1368 40.2869 83.3903 38.5435C81.6435 36.7999 81.6435 33.9733 83.3903 32.2297L100 15.6505ZM84.1878 0H86.1007C91.776 0 96.6568 3.40133 98.8158 8.27666L77.9008 29.1532C75.1824 31.8666 70.7752 31.8666 68.0567 29.1532L66.4409 27.5403C63.7224 24.8269 63.7224 20.4277 66.4409 17.7143L84.1878 0ZM62.9789 0H75.6297L60.4047 15.1971C58.6579 16.9405 55.826 16.9405 54.0792 15.1971C52.3325 13.4536 52.3325 10.6268 54.0792 8.88336L62.9789 0ZM31.5361 0H54.456L21.9599 32.4364C19.2415 35.1498 14.8342 35.1498 12.1158 32.4364L10.4999 30.8235C7.78156 28.1101 7.78157 23.7109 10.4999 20.9976L31.5361 0ZM22.9735 0L2.41905 20.5168C1.70809 21.2264 0.881594 21.7505 0 22.0889V13.8992C0 6.22286 6.22292 0 13.8993 0H22.9735Z" />
        </svg>
    </div>
  )
}

export default Logo