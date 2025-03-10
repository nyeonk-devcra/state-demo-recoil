const DevCra = ({
  hideText,
  className,
  landscape,
}: {
  hideText?: boolean;
  className?: string;
  landscape?: boolean;
}) => {
  return hideText ? (
    <DevCraOnlyLogo className={className} />
  ) : landscape ? (
    <DevCraWithLandscapeText className={className} />
  ) : (
    <DevCraWithText className={className} />
  );
};

const DevCraOnlyLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="400"
      height="180"
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.5263 89.4737L86.8421 178.947H40.3158L0 89.4737L40.3158 0H86.8421L46.5263 89.4737Z"
        fill="#E9A374"
      />
      <path
        d="M46.5263 89.4737L86.8421 178.947H40.3158L0 89.4737L40.3158 0H86.8421L46.5263 89.4737Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M201.474 0H246.316L198.526 179.053H153.684L201.474 0Z"
        fill="#E9A374"
      />
      <path
        d="M201.474 0H246.316L198.526 179.053H153.684L201.474 0Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M359.684 0L400 89.4737L359.684 178.947H313.158L353.474 89.4737L313.158 0H359.684Z"
        fill="#E9A374"
      />
      <path
        d="M359.684 0L400 89.4737L359.684 178.947H313.158L353.474 89.4737L313.158 0H359.684Z"
        fill="black"
        fillOpacity="0.2"
      />
    </svg>
  );
};
const DevCraWithText = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="540"
      height="289"
      viewBox="0 0 540 289"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M174.846 55.4674L199.842 110.935H170.996L146 55.4674L170.996 0H199.842L174.846 55.4674Z"
        fill="#E9A374"
      />
      <path
        d="M174.846 55.4674L199.842 110.935H170.996L146 55.4674L170.996 0H199.842L174.846 55.4674Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M270.914 0H298.716L269.086 111H241.284L270.914 0Z"
        fill="#E9A374"
      />
      <path
        d="M270.914 0H298.716L269.086 111H241.284L270.914 0Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M369.005 0L394 55.4674L369.005 110.935H340.158L365.154 55.4674L340.158 0H369.005Z"
        fill="#E9A374"
      />
      <path
        d="M369.005 0L394 55.4674L369.005 110.935H340.158L365.154 55.4674L340.158 0H369.005Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M78.4514 235.9C78.4514 266.886 59.6056 287.441 31.4682 287.441H0V198.12H32.4763C52.1987 198.12 64.0321 212.189 64.0321 235.9C64.0321 259.61 51.3221 273.811 32.4324 273.811H14.4193V211.619H20.2045V268.025H32.4324C48.0789 268.025 58.2469 255.184 58.2469 235.856C58.2469 215.169 48.824 203.862 32.4324 203.862H5.78524V281.612H31.4682C56.5376 281.612 72.6662 263.599 72.6662 235.856C72.6662 209.822 60.1753 190.232 32.3886 190.232H0V184.446H32.4324C60.1315 184.446 78.4514 202.766 78.4514 235.812V235.9Z"
        fill="#E9A374"
      />
      <path
        d="M78.4514 235.9C78.4514 266.886 59.6056 287.441 31.4682 287.441H0V198.12H32.4763C52.1987 198.12 64.0321 212.189 64.0321 235.9C64.0321 259.61 51.3221 273.811 32.4324 273.811H14.4193V211.619H20.2045V268.025H32.4324C48.0789 268.025 58.2469 255.184 58.2469 235.856C58.2469 215.169 48.824 203.862 32.4324 203.862H5.78524V281.612H31.4682C56.5376 281.612 72.6662 263.599 72.6662 235.856C72.6662 209.822 60.1753 190.232 32.3886 190.232H0V184.446H32.4324C60.1315 184.446 78.4514 202.766 78.4514 235.812V235.9Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M160.322 268.069V287.441H96.6406V184.534H159.358V203.906H116.845V215.915H111.06V198.121H153.573V190.276H102.382V281.656H154.537V273.811H111.06V223.716H157.78V243.088H125.479V237.303H151.995V229.457H116.801V267.982H160.278L160.322 268.069Z"
        fill="#E9A374"
      />
      <path
        d="M160.322 268.069V287.441H96.6406V184.534H159.358V203.906H116.845V215.915H111.06V198.121H153.573V190.276H102.382V281.656H154.537V273.811H111.06V223.716H157.78V243.088H125.479V237.303H151.995V229.457H116.801V267.982H160.278L160.322 268.069Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M262.221 184.534L225.318 287.441H221.549L187.144 190.276H178.072L212.959 287.441H206.823L169.876 184.534H191.176L223.477 275.564L254.069 190.319H244.997L223.477 250.977L220.453 242.255L240.921 184.534H262.221Z"
        fill="#E9A374"
      />
      <path
        d="M262.221 184.534L225.318 287.441H221.549L187.144 190.276H178.072L212.959 287.441H206.823L169.876 184.534H191.176L223.477 275.564L254.069 190.319H244.997L223.477 250.977L220.453 242.255L240.921 184.534H262.221Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M348.123 278.632C339.139 284.592 328.62 288.887 315.077 288.887C286.502 288.887 270.022 265.527 270.022 236.864V234.936C270.022 233.489 270.11 232.043 270.154 230.684H284.661C285.976 213.46 296.494 196.63 314.288 196.63C322.922 196.63 328.313 198.69 333.923 202.196L337.911 195.053C330.768 190.714 323.273 188.785 313.85 188.785C293.295 188.785 280.804 204.519 277.035 222.839H271.118C275.194 201.451 289.964 183 313.85 183C326.955 183 336.509 186.506 345.537 193.256L335.939 210.48C328.795 205.396 324.062 202.372 314.288 202.372C298.905 202.372 290.227 218.851 290.227 234.936V236.47H275.808V236.864C275.808 260.969 288.781 283.102 315.121 283.102C324.193 283.102 332.433 280.955 340.541 276.528L336.684 269.165C330.768 272.54 323.843 275.301 315.647 275.301C296.889 275.301 287.159 260.662 284.924 244.227H290.753C292.681 257.419 300.22 269.516 315.603 269.516C324.544 269.516 331.951 265.615 338.876 261.013L348.079 278.676L348.123 278.632Z"
        fill="#E9A374"
      />
      <path
        d="M348.123 278.632C339.139 284.592 328.62 288.887 315.077 288.887C286.502 288.887 270.022 265.527 270.022 236.864V234.936C270.022 233.489 270.11 232.043 270.154 230.684H284.661C285.976 213.46 296.494 196.63 314.288 196.63C322.922 196.63 328.313 198.69 333.923 202.196L337.911 195.053C330.768 190.714 323.273 188.785 313.85 188.785C293.295 188.785 280.804 204.519 277.035 222.839H271.118C275.194 201.451 289.964 183 313.85 183C326.955 183 336.509 186.506 345.537 193.256L335.939 210.48C328.795 205.396 324.062 202.372 314.288 202.372C298.905 202.372 290.227 218.851 290.227 234.936V236.47H275.808V236.864C275.808 260.969 288.781 283.102 315.121 283.102C324.193 283.102 332.433 280.955 340.541 276.528L336.684 269.165C330.768 272.54 323.843 275.301 315.647 275.301C296.889 275.301 287.159 260.662 284.924 244.227H290.753C292.681 257.419 300.22 269.516 315.603 269.516C324.544 269.516 331.951 265.615 338.876 261.013L348.079 278.676L348.123 278.632Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M435.296 217.142C435.296 229.633 429.861 239.757 420.263 245.191L416.888 240.59C425.522 235.506 429.511 227.485 429.511 217.142C429.511 200.575 417.195 190.276 398.393 190.276H368.634V281.656H377.312V231.649H383.273L420.044 281.656H430.212L393.134 231.649H398.788C411.498 231.649 415.135 224.856 415.135 217.142C415.135 208.464 408.999 203.862 399.489 203.862H383.141V223.804H377.356V198.121H399.489C412.549 198.121 420.92 205.615 420.92 217.142C420.92 228.055 414.785 235.418 404.31 236.908L441.739 287.397H417.151L383.141 241.028V287.397H362.937V184.534H398.437C422.148 184.534 435.34 198.91 435.34 217.186L435.296 217.142Z"
        fill="#E9A374"
      />
      <path
        d="M435.296 217.142C435.296 229.633 429.861 239.757 420.263 245.191L416.888 240.59C425.522 235.506 429.511 227.485 429.511 217.142C429.511 200.575 417.195 190.276 398.393 190.276H368.634V281.656H377.312V231.649H383.273L420.044 281.656H430.212L393.134 231.649H398.788C411.498 231.649 415.135 224.856 415.135 217.142C415.135 208.464 408.999 203.862 399.489 203.862H383.141V223.804H377.356V198.121H399.489C412.549 198.121 420.92 205.615 420.92 217.142C420.92 228.055 414.785 235.418 404.31 236.908L441.739 287.397H417.151L383.141 241.028V287.397H362.937V184.534H398.437C422.148 184.534 435.34 198.91 435.34 217.186L435.296 217.142Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M540 287.441H518.919L509.628 261.802H460.366L453.134 281.656H461.856L466.239 269.647H472.374L465.932 287.441H444.895L456.29 256.061H513.66L522.952 281.7H531.761L498.496 190.319H486.399L467.422 242.474H502.616L492.448 214.512L485.084 234.629H478.949L492.404 197.595L510.811 248.216H459.139L482.28 184.534H502.484L539.913 287.441H540Z"
        fill="#E9A374"
      />
      <path
        d="M540 287.441H518.919L509.628 261.802H460.366L453.134 281.656H461.856L466.239 269.647H472.374L465.932 287.441H444.895L456.29 256.061H513.66L522.952 281.7H531.761L498.496 190.319H486.399L467.422 242.474H502.616L492.448 214.512L485.084 234.629H478.949L492.404 197.595L510.811 248.216H459.139L482.28 184.534H502.484L539.913 287.441H540Z"
        fill="black"
        fillOpacity="0.2"
      />
    </svg>
  );
};

const DevCraWithLandscapeText = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="798"
      height="101"
      viewBox="0 0 798 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.9877 50.4139L48.5064 100.384H22.5187L0 50.4139L22.5187 0.443359H48.5064L25.9877 50.4139Z"
        fill="#E9A374"
      />
      <path
        d="M25.9877 50.4139L48.5064 100.384H22.5187L0 50.4139L22.5187 0.443359H48.5064L25.9877 50.4139Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M112.535 0.443359H137.582L110.889 100.443H85.8418L112.535 0.443359Z"
        fill="#E9A374"
      />
      <path
        d="M112.535 0.443359H137.582L110.889 100.443H85.8418L112.535 0.443359Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M200.905 0.443359L223.423 50.4139L200.905 100.384H174.917L197.436 50.4139L174.917 0.443359H200.905Z"
        fill="#E9A374"
      />
      <path
        d="M200.905 0.443359L223.423 50.4139L200.905 100.384H174.917L197.436 50.4139L174.917 0.443359H200.905Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M361.513 50.4018C361.513 79.665 343.715 99.0773 317.142 99.0773H287.424V14.723H318.094C336.72 14.723 347.896 28.0094 347.896 50.4018C347.896 72.7942 335.893 86.2048 318.053 86.2048H301.041V27.4713H306.505V80.7412H318.053C332.83 80.7412 342.432 68.6137 342.432 50.3604C342.432 30.824 333.533 20.1452 318.053 20.1452H292.887V93.5723H317.142C340.818 93.5723 356.05 76.5607 356.05 50.3604C356.05 25.7743 344.253 7.27266 318.012 7.27266H287.424V1.80908H318.053C344.212 1.80908 361.513 19.1104 361.513 50.319V50.4018Z"
        fill="#E9A374"
      />
      <path
        d="M361.513 50.4018C361.513 79.665 343.715 99.0773 317.142 99.0773H287.424V14.723H318.094C336.72 14.723 347.896 28.0094 347.896 50.4018C347.896 72.7942 335.893 86.2048 318.053 86.2048H301.041V27.4713H306.505V80.7412H318.053C332.83 80.7412 342.432 68.6137 342.432 50.3604C342.432 30.824 333.533 20.1452 318.053 20.1452H292.887V93.5723H317.142C340.818 93.5723 356.05 76.5607 356.05 50.3604C356.05 25.7743 344.253 7.27266 318.012 7.27266H287.424V1.80908H318.053C344.212 1.80908 361.513 19.1104 361.513 50.319V50.4018Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M438.832 80.7828V99.0775H378.691V1.89209H437.922V20.1868H397.773V31.5278H392.309V14.7232H432.458V7.31427H384.114V93.6139H433.369V86.205H392.309V38.8954H436.432V57.1901H405.927V51.7265H430.968V44.3176H397.731V80.7H438.791L438.832 80.7828Z"
        fill="#E9A374"
      />
      <path
        d="M438.832 80.7828V99.0775H378.691V1.89209H437.922V20.1868H397.773V31.5278H392.309V14.7232H432.458V7.31427H384.114V93.6139H433.369V86.205H392.309V38.8954H436.432V57.1901H405.927V51.7265H430.968V44.3176H397.731V80.7H438.791L438.832 80.7828Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M535.065 1.89209L500.214 99.0775H496.654L464.162 7.31427H455.595L488.542 99.0775H482.747L447.854 1.89209H467.97L498.475 87.8606L527.366 7.35566H518.798L498.475 64.6404L495.62 56.4037L514.949 1.89209H535.065Z"
        fill="#E9A374"
      />
      <path
        d="M535.065 1.89209L500.214 99.0775H496.654L464.162 7.31427H455.595L488.542 99.0775H482.747L447.854 1.89209H467.97L498.475 87.8606L527.366 7.35566H518.798L498.475 64.6404L495.62 56.4037L514.949 1.89209H535.065Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M616.192 90.7579C607.707 96.3871 597.773 100.443 584.983 100.443C557.997 100.443 542.434 78.3821 542.434 51.3126V49.4914C542.434 48.1255 542.516 46.7596 542.558 45.4765H556.258C557.5 29.2099 567.434 13.3159 584.238 13.3159C592.392 13.3159 597.483 15.2612 602.781 18.5725L606.548 11.8258C599.801 7.72813 592.723 5.90693 583.824 5.90693C564.412 5.90693 552.616 20.7662 549.056 38.0675H543.468C547.318 17.8689 561.266 0.443359 583.824 0.443359C596.2 0.443359 605.224 3.75462 613.75 10.1288L604.685 26.3953C597.939 21.594 593.469 18.7381 584.238 18.7381C569.71 18.7381 561.515 34.301 561.515 49.4914V50.9401H547.897V51.3126C547.897 74.0775 560.149 94.9798 585.025 94.9798C593.593 94.9798 601.374 92.9516 609.031 88.7712L605.389 81.8175C599.801 85.0046 593.262 87.6122 585.521 87.6122C567.806 87.6122 558.617 73.7877 556.506 58.2662H562.011C563.833 70.7248 570.952 82.1487 585.48 82.1487C593.924 82.1487 600.919 78.4649 607.459 74.1189L616.151 90.7993L616.192 90.7579Z"
        fill="#E9A374"
      />
      <path
        d="M616.192 90.7579C607.707 96.3871 597.773 100.443 584.983 100.443C557.997 100.443 542.434 78.3821 542.434 51.3126V49.4914C542.434 48.1255 542.516 46.7596 542.558 45.4765H556.258C557.5 29.2099 567.434 13.3159 584.238 13.3159C592.392 13.3159 597.483 15.2612 602.781 18.5725L606.548 11.8258C599.801 7.72813 592.723 5.90693 583.824 5.90693C564.412 5.90693 552.616 20.7662 549.056 38.0675H543.468C547.318 17.8689 561.266 0.443359 583.824 0.443359C596.2 0.443359 605.224 3.75462 613.75 10.1288L604.685 26.3953C597.939 21.594 593.469 18.7381 584.238 18.7381C569.71 18.7381 561.515 34.301 561.515 49.4914V50.9401H547.897V51.3126C547.897 74.0775 560.149 94.9798 585.025 94.9798C593.593 94.9798 601.374 92.9516 609.031 88.7712L605.389 81.8175C599.801 85.0046 593.262 87.6122 585.521 87.6122C567.806 87.6122 558.617 73.7877 556.506 58.2662H562.011C563.833 70.7248 570.952 82.1487 585.48 82.1487C593.924 82.1487 600.919 78.4649 607.459 74.1189L616.151 90.7993L616.192 90.7579Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M698.518 32.6868C698.518 44.4831 693.385 54.0444 684.321 59.1768L681.134 54.8308C689.288 50.0295 693.054 42.455 693.054 32.6868C693.054 17.0411 681.424 7.31427 663.667 7.31427H635.562V93.6139H643.758V46.3871H649.387L684.114 93.6139H693.717L658.7 46.3871H664.039C676.043 46.3871 679.478 39.9716 679.478 32.6868C679.478 24.4914 673.683 20.1454 664.702 20.1454H649.263V38.9782H643.799V14.7232H664.702C677.036 14.7232 684.942 21.801 684.942 32.6868C684.942 42.9931 679.147 49.9467 669.255 51.354L704.602 99.0361H681.382L649.263 55.2447V99.0361H630.182V1.89209H663.708C686.101 1.89209 698.559 15.4682 698.559 32.7282L698.518 32.6868Z"
        fill="#E9A374"
      />
      <path
        d="M698.518 32.6868C698.518 44.4831 693.385 54.0444 684.321 59.1768L681.134 54.8308C689.288 50.0295 693.054 42.455 693.054 32.6868C693.054 17.0411 681.424 7.31427 663.667 7.31427H635.562V93.6139H643.758V46.3871H649.387L684.114 93.6139H693.717L658.7 46.3871H664.039C676.043 46.3871 679.478 39.9716 679.478 32.6868C679.478 24.4914 673.683 20.1454 664.702 20.1454H649.263V38.9782H643.799V14.7232H664.702C677.036 14.7232 684.942 21.801 684.942 32.6868C684.942 42.9931 679.147 49.9467 669.255 51.354L704.602 99.0361H681.382L649.263 55.2447V99.0361H630.182V1.89209H663.708C686.101 1.89209 698.559 15.4682 698.559 32.7282L698.518 32.6868Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M797.4 99.0775H777.491L768.716 74.8639H722.193L715.364 93.6139H723.6L727.739 82.2729H733.534L727.45 99.0775H707.582L718.344 69.4417H772.524L781.299 93.6553H789.619L758.203 7.35566H746.779L728.857 56.6106H762.094L752.491 30.2033L745.537 49.2017H739.743L752.45 14.2265L769.834 62.0328H721.034L742.888 1.89209H761.97L797.317 99.0775H797.4Z"
        fill="#E9A374"
      />
      <path
        d="M797.4 99.0775H777.491L768.716 74.8639H722.193L715.364 93.6139H723.6L727.739 82.2729H733.534L727.45 99.0775H707.582L718.344 69.4417H772.524L781.299 93.6553H789.619L758.203 7.35566H746.779L728.857 56.6106H762.094L752.491 30.2033L745.537 49.2017H739.743L752.45 14.2265L769.834 62.0328H721.034L742.888 1.89209H761.97L797.317 99.0775H797.4Z"
        fill="black"
        fillOpacity="0.2"
      />
    </svg>
  );
};

export default DevCra;
