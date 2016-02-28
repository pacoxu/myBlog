##Git的对象类型

1. blog：包含文件的内容。
2. tree：包含blob的id（SHA1）和路径名字，文件的路径名。
3. commit：保存每一次提交的元数据。指向一个tree对象。
4. tag：指向一个commit对象。

可以通过 git cat-file -p [id]的方式来查看对象的内容。

Git只存储文件的内容，也就是blob，而不存储目录结构。Git把路径名存储在tree对象中，以此重建目录的结构。的并不是每次提交的差异，而是文件的内容。但是GIt也有一种叫打包文件的存储机制，这种机制能够计算文件的差异，并且只存储差异。

##Git的命令

*git rm*

1.git rm会删除索引中的和目录中的文件
2.git rm --cached只会删除索引中的文件

##.gitignore的格式

1. ' / '：src/ 可以匹配src和src的子目录
2. ' * '：通配符

##符号引用
 
符号引用是相对于SHA1而言的，分支名称、标签名称都算是符号引用。

*特殊的符号引用*

1.HEAD：始终指向当前分支的最近提交。
2.ORIG_HEAD：
3.FETCH_HEAD：
4:MERGE_HEAD：

*相对提交名*

##git bisect

这个命令会开始一个二分搜索。有时候代码明明好好地，突然就出问题了，你也不知道到底是哪个commit导致它出问题了。这个时候就可以用这个命令查出到底是哪个commit出问题。

1.git bisect start：开始查找
2.git bisect bad：你一开始在你的HEAD分支上，一般来说你都是HEAD出问题了才会用这个命令，所以先把HEAD设置成good。
3.git checkout commit：然后checkout到之前的某个好的的commit上
4.git bisect bad/good：如果这个commit是好的，就输入good，否则就bad。然后循环
5.git bisect replay：如果迷失了，可以重新开始
6.git bisect visualize：可视化地检查提交范围内的内容
7.git bisect reset：最后找到出错的commit后，要结束bisect。因为整个bisect过程都是在一个分离的HEAD上执行的。
