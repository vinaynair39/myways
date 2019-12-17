import React from 'react';
import Link from 'react-router-dom/Link';
import { faCalendarAlt, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { history } from '../../routers/AppRouter';

export const ResultChartBox = () => (
    <>
            <div className="list-card__body">
            <div className="list-card__image">
                {/* {imageUrl ? <img src={imageUrl} alt="" /> : <img src='/images/img5.jpeg' alt="" />} */}
                {<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA2FBMVEX////WU0jiV0zvx17mcGfcVUriVUrWUUbhSz7wy1/VTkLhUUXURTjhU0fmb2bhTkLjW1DUSDzgRjnkZFrVTUf++PjlaV/98/LuxFLrkozqi4TVTEDYXFLTQjX87u3wr6r1yMXttrL5393XWUnmoFbzwL3ddE7rkov++/P20c/ofnbtnpnffHTcbWT42NbjlFToqFjfglDsulvoe3P568bz1ozwyWX779P78+Huwkj35Lny0oDxz3Xfd2/55eP02ZnoqEvopJ/bbEz24KnqslrkmVXZYkvhiFGdyGVPAAAK20lEQVR4nO2d6XbavBaGIeRDYAzEzGDMkJSkQKBt0vTLaRN6aHvS+7+jYzMED5KsYUvGLN6frCTmiaS9X20NzmTOOuuss84666yzzjpLk74m/QWU6ynpL6Bc3z4m/Q0U62Pn36S/gmI9/+d70l9Bsb53Tn0g/sh1TnsgfuzkOqedL753crnT7qYvOVew3XQwHXd7vdnj5eWsO5xMr0H/+LtWk8m6t+h7ai1e3ec08T/37DYhYDdtj7qtQq1QLZXKrvLlUrVQKNQq88mA8Hyxp0yH96ZjWZaBdjJsy3TM+/Eg+sNPXhPmXkAevBrOqoVS/iKifKlQq3eXMJCD8b1p2gbKRoQMy1nMQ4/ZNCFIIzbHrWq1jME7UNa7U9mnDMavtoWje6e0zf6w7fuNH7mdZJ88L1fJdAfIi8DTeXXdsyxEwdtBWlZ3tf+Vr50dYOenDN91rxbPt4WsFrqCkac5Wji01gs0pHO/7S7Pe0Cpfjq4K5SY8LYqFR5FOuu4b7LhbWWYPa8dX3I+PQsCDss8fJ7KhUfedpz0LR4+T7a9bv7o+AnFJlHTeoGtfwYZa7NV/N8+PISv/XZC9n+LuaD4Edu9mgCfp1JtzhpzVq+OAF+28fYQBuTvqMt6VYzPU/VqwvSQtW0I8GUbtxE8L9zwzRSHIh30oHxhhrEg4X8i/wDc8N18jjbgBvGFvRnbMznACy+sDunPaN6JdFDUuPlUxANuEiMj47LOG0KxzXhJa8Zl3xbAy95+yBH5PMTOz38ZQs6kUJYHdFXKk0fjmrODNjzdfnggt9875LenuOLUWDSGRpQv9PCOfLDgBLy5/fTZpYvF27fkt6ff5LZcSw9Bn0pXS8wjRiZvCL359cVFzLEhdjovT7+/PpMI5wU4vgvPrI6jjxDJ8V4vffv7J5bRxftNDTd3sIBeT70LPqH5avHzvWO+/cXkej8fHS+TmUEDuqq2/DF1hfhjaBDyC5Gxk4tN+j0JH0NW+eIw4ZjYIkk+yJj9hM8YnZ+xiaKroAU95av7tLEWGYJRxl/YZoxfwRgqAnQRa1uDMzcB+DzExp8wYpFh/jThBeTJKoWuG2PuxWNMhPFDELH4YEeDdkhTxmKFS+bqaiMOyMJstZCLMSHEoP1+uEHWiA44YAP04OqtVqVy6alyxY5YKgvNlMiIgY761sgikz7zbjF40Xz+ot66DIgD8R9QQNfn+ProbcP9APVpgPP4PJG/uArhea3IDAhO2LjdN2Lxf43NJ3ZXZhC6zVeJ8HmNmBihbyg2dp+Qh2I7rrPl83g+nm4KTph92zXhlz0hsklT0lnMjDd/ReBLtA13KaP40Hj/xFjgAUe1GL7o+NurlVykcXVTDDShKxM/6a5TvyalAXkCjQrCbca48X2Csrg595AaR/N1El2lRf/XaCD8W8wVPzf8H9nzKOCAsm7mCpMhWnXPznjiAFRB6HXTQCf1Vqeiqwo9SpjJX4R7aKW+geNBU0jY+HNIFTsZr2HAJSXMRIZgy8MToFNG+DfUSV054eWvR5pdq4T4hPFUEf4qfgoTolYQcEXLFAHASl2GTw2hm/Rvw4RZM1jf61JGYSDItLjmg7oIG4FcsZVxzxhIg2mCKzFoJPwQ/QxZ/mkUeU6Rv/L3UI5Zkl7CW8yH/jlGk/zNoQHVEGKFrIMBHxFrM3nfIKzIDkHNhFnrULOZkVKFfxCCtKBWQvQ+xWiSU4UvUcAA6iTMOvtuSiwg+ptQPorqJ7T2C9BEP5P35UGoxTadhPuiFLGC6GtCnhng8RBmdzMMciStgPdR3YRjqmPzNSFYH9VMuHNul6ROesiFQHFUOyHqe9WMAW7Pr6eDnakArulrJcxuSvykYejrpHCjUDfhZiDOScPw0EkBATUTbtw3MRuqiDO6CTczfUIX9E2bAOOMdkKrmWnGD0P2kv3REWadduaaYLsPwxC0k+omNKfkUPpuaCAjqXZCN5iOCQWMg+tONaE9JCYLRYFGN6HRy/QIycJHCAmomxC9kioYh2RRSTfhIvMYlw7hpoaJEPYzBFd9SIfpJsz24y0NbDrUTpjNEEeZmmRxRIT7bgo5N0yGkNhE270zLVi+JAjJbeRtPZRbKzwGwj4pWyiT/mxBXLM4EcIK0bWdCuGCur59AoSu86ZvhUo9oTt7Itf0T4LQnQFfnzahOc206Xsu007otGm7FE6A0Ksm0vd7pZ6wT6nqnwThpqqvOZgmsDKzYj4HlELC7QEa4En8MRFuV0gzd1oHYhKr3Nzn8dJDuNupoHcgJrHbJHOpMyMmsWOIuDiTekJ7v+tLqzVNZOee1kpGIrsvtUbTZHbQtkF2/x4boX8XNMvp2PQRBk7LxhzrSiVh8DSCxoqbNsLgiRL6qaB0EoZOBelLGLoIwye7iBuHUksYOZ2nbQ6liTA0CjfhFH4hLUHCUCDdSt29NAkQ4k4666pmaCHEn1bPTLUEGy2EhBsHFN2AlQAh6dYItttpUkCIEPFq2GvSwYRUESKLck+zhniqntDCxtG94i5wSQEheRBu1LxSPRRVEwbmvTitVE/3FRNSB+FWS8X1YcWEpEzo1xTs8tkECJ2Yi5m3mkBeP6uX0KSG0YMkb/FOjtCk3NQWFNwtyVoJ2QG9lW9liMoIkbNmB3TDjbLyoipCZDIFmYOuLxSlfkWEiCVNBDW4UmPg1BAiU+CtKO2KkumiEkJkCL3apjlTgaiC0MjyvA/Fr56CyZQCQqMf/xYNkrrwWQOe0F7IvCoM3t6AE1r3cu9CA7c30ITWXTwEXSNgRGBCHqdG0jIPmvtBCZHJ5dRIugatbEASIjP2BnY2gdobQELkjGAA3dwPaG/gCFF4lVcKEc7egBEaWdjXn4LZGyhCoy/q1EjqAq1MARHafZlXZeIFZG9gCO3INcEQgqnBgRBa0VV6EIFUbyAIIYwMXsuSfO6XJ0SsVVERreTtjTQhmJHBayD9xkBZQuRwl5z41L6UzP2ShIBOjShJeyNHiAxAp0aU3Du9pAjhjQxeUq8OlCGUKTnxaSgx75cgtFswb6dnkYS9ESe0lDg1kkbCa+HChGZPJ6BE9UaU0FFoZPAStTdihEAlJz61xeyNECFylDo1kpqPIrlfhBBZip0aEVHkjawChAy7gJRJwN7wEwouDgJpzp0YuQmNrC4jgxd39YaX0G4lC+jaG04Hx0kotzgII/Z3swoQqio58WnJtTGFi1BdyYlPXPaGh1BlyYlPPPaGnRCxbaXUIw57w0yIrEScGlHMKzeshLEvZ9auO0ZERkLk6Cg58WnNlvvZCA1DT8mJT2MmRCZCW1NNjVdMG1NYCO1F0k6NpClDKzIQWvRTL4mKYWNKPKGlueTEp1Vs7o8lPB4jg1e7FYMYR8i3Hz0JxdkbOqHixUEg0e0NlfD4jAxec9rGFBqh0H70RLSmJEYKITKTLDnxiWJvyIS6FgdhRN6YQiQ8XiOD15R0LJxEeAwlJz6R7A2B8DhKTnwibEzBE1pHUnLiE/5YEZbw+I0MXlh7gyE8qpITpzD2JkoocLDuiBTdmBIhTItTIymychMmRHZanBpJ4WNFIUIDpcepkRSyN0FCfbucVCq4MSVAqHOXk0qtWlUsIXIkD9YdkbqFcpTQOLKFCTmNKnvGf975XtM0WWLQqFKrlveEhuXcH9+6hLRWw8darWZapuPcj08hhGLVXE1H0xPrnWedddZZZ5111lka9H8hvlKtD1ML+AAAAABJRU5ErkJggg==' alt="" />}
            </div>
            <div className="list-card__content">
                <p>blah blah blah</p>
            </div>
        </div>
    </> 
);

export default ResultChartBox;