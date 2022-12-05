
//This funtion consist of 10 functions based on parameters pased in
//First Timsort will see if size is greater than 32 if so insert sort from 0 index to 32 else insert sort for size of array
//Then insert sort will sort that chunk from array
//Then after the entire array is sorted in sizes of 32 the mergeSort is called to merge the 32 sied sort
//Code inspired by https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-25.php



function TimSort(currentStocks, sortBy, sortAscending){

    if (sortBy === "price") {
        if (!sortAscending) {

            function mergeAsend(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }

                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].price > rightArr[num2].price) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }
                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSortAsend(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].price < temp.price) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }

            }

            function TimAsend(apiArr) {

                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }

                    InsertSortAsend(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }

                        mergeAsend(apiArr, left, mid, right);
                    }
                }

                return apiArr;
            }
            TimAsend(currentStocks, "price");
        }
        else {

            function merge(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }
                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].price <= rightArr[num2].price) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }
                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSort(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].price > temp.price) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function Tim(apiArr) {
                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }

                    InsertSort(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }
                        merge(apiArr, left, mid, right);
                    }
                }
                return apiArr;
            }
            Tim(currentStocks);
        }
    }
    else if (sortBy === "marketCap") {
        if (!sortAscending) {

            function mergeAsend(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }
                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].marketCap > rightArr[num2].marketCap) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }

                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSortAsend(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].marketCap < temp.marketCap) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function TimAsend(apiArr) {

                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }

                    InsertSortAsend(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }

                        mergeAsend(apiArr, left, mid, right);

                    }
                }
                return apiArr;
            }

            TimAsend(currentStocks, "marketCap");
        } else {

            function merge(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }
                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].marketCap <= rightArr[num2].marketCap) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }
                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }
            function InsertSort(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].marketCap > temp.marketCap) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function Tim(apiArr) {
                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }
                    InsertSort(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }

                        merge(apiArr, left, mid, right);
                    }
                }
                return apiArr;
            }

            Tim(currentStocks);
        }
    }
    else if (sortBy === "volume") {
        if (!sortAscending) {

            function mergeAsend(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }
                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].volume > rightArr[num2].volume) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }

                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSortAsend(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].volume < temp.volume) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function TimAsend(apiArr) {

                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }
                    InsertSortAsend(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }

                        mergeAsend(apiArr, left, mid, right);
                    }
                }
                return apiArr;
            }

            TimAsend(currentStocks, "volume");
        }
        else {

            function merge(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }
                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].volume <= rightArr[num2].volume) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }
                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSort(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].volume > temp.volume) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function Tim(apiArr) {
                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }

                    InsertSort(apiArr, i, right);

                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }

                        merge(apiArr, left, mid, right);

                    }
                }
                return apiArr;
            }

            Tim(currentStocks);
        }
    } else if (sortBy === "beta") {
        if (!sortAscending) {

            function mergeAsend(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }
                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].beta > rightArr[num2].beta) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }
                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSortAsend(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].beta < temp.beta) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function TimAsend(apiArr) {

                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }

                    InsertSortAsend(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;
                        }
                        else {
                            right = size - 1;
                        }
                        mergeAsend(apiArr, left, mid, right);
                    }
                }
                return apiArr;
            }

            TimAsend(currentStocks, "beta");
        }
        else {

            function merge(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }

                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].beta <= rightArr[num2].beta) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }
                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSort(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].beta > temp.beta) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function Tim(apiArr) {
                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }
                    InsertSort(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }

                        merge(apiArr, left, mid, right);
                    }
                }
                return apiArr;
            }

            Tim(currentStocks);
        }
    }
    else if (sortBy === "symbol") {
        if (!sortAscending) {


            function mergeAsend(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }
                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].symbol > rightArr[num2].symbol) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }
                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSortAsend(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].symbol < temp.symbol) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function TimAsend(apiArr) {


                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }

                    InsertSortAsend(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }
                        mergeAsend(apiArr, left, mid, right);
                    }
                }
                return apiArr;
            }
            TimAsend(currentStocks, "symbol");

        } else {

            function merge(apiArr, left, mid, right) {

                if (mid >= right) {
                    return
                }
                let length1 = mid - left + 1;
                let length2 = right - mid;
                let leftArr = Array(length1);
                let rightArr = Array(length2);

                for (let i = 0; i < length1; i++) {
                    leftArr[i] = apiArr[left + i];
                }

                for (let i = 0; i < length2; i++) {
                    rightArr[i] = apiArr[mid + i + 1];
                }

                let num1 = 0;
                let num2 = 0;
                let num3 = left;

                while ((num1 < leftArr.length) && (num2 < rightArr.length)) {

                    if (leftArr[num1].symbol <= rightArr[num2].symbol) {
                        apiArr[num3] = leftArr[num1];
                        num1++;
                    } else {
                        apiArr[num3] = rightArr[num2];
                        num2++;
                    }
                    num3++;
                }

                while (num1 < leftArr.length) {
                    apiArr[num3] = leftArr[num1];
                    num3++;
                    num1++;
                }
                while (num2 < rightArr.length) {
                    apiArr[num3] = rightArr[num2];
                    num3++;
                    num2++;
                }
            }

            function InsertSort(apiArr, left, right) {

                for (let i = left + 1; i <= right; i++) {

                    let temp = apiArr[i];
                    let index = i - 1;

                    while (index >= left && apiArr[index].symbol > temp.symbol) {
                        apiArr[index + 1] = apiArr[index];
                        index--;
                    }
                    apiArr[index + 1] = temp;
                }
            }

            function Tim(apiArr) {
                let MIN = 32;
                let size = apiArr.length;
                let right;

                for (let i = 0; i < size; i += MIN) {

                    if ((i + MIN - 1) < (size - 1)) {
                        right = i + MIN - 1;
                    } else {
                        right = size - 1;
                    }

                    InsertSort(apiArr, i, right);
                }

                for (let i = MIN; i < size; i *= 2) {

                    for (let left = 0; left < size; left += i * 2) {

                        let mid = left + i - 1;

                        if ((left + 2 * i - 1) < size - 1) {
                            right = left + 2 * i - 1;

                        } else {
                            right = size - 1;
                        }
                        merge(apiArr, left, mid, right);
                    }
                }
                return apiArr;
            }

            Tim(currentStocks);
        }
    }
}

//Export it to app.js
export default TimSort;
