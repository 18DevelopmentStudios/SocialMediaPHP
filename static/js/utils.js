/*  
@@@@@@ @@@@@@  @@@      @@@@@@@      @@@@@@@  @@@@@@@@ @@@  @@@
@@         @@! @@!        @@!        @@!  @@@ @@!      @@!  @@@
!@@!!   @!!!:  @!!        @!!        @!@  !@! @!!!:!   @!@  !@!
   !:!     !!: !!:        !!:        !!:  !!! !!:       !: .:! 
::.: :  ::: ::  : ::.: :    :         :: :  :  : :: :::    ::   

link  https://github.com/S3LTDev/S3LT-Social-Template
author  max2tz https://github.com/S3LT
license  GPL-3.0 License
*/
function nFormatter(num, digits) {
    let si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "B" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ]
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    let i
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol
}

function nDetailFormatter(num) {
    return String(num).replace(/(.)(?=(\d{3})+$)/g,'$1,')
}
