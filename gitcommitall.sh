
checkAndCommit() {
	OUTPUT=$(git status --porcelain)
	if [ -z "$OUTPUT" ]; then
		echo "#### No changes found"
	else
		echo "#### Changes found"
		echo $OUTPUT
		echo "#### Add any new files"
		git add .
		echo "#### Committing files"
		git commit -m "${1}"
		echo "#### Pushing to repo"
		git push
		git log -1
		echo "#### Complete"
	fi
}

commitAll() {
	ECHO "#### admin"
	cd ~/git/cborgreactnative/cborgreactnative/admin
	checkAndCommit "${1}"

	ECHO "#### adminView"
	cd ~/git/cborgreactnative/cborgreactnative/adminView
	checkAndCommit "${1}"
	
	ECHO "#### core"
	cd ~/git/cborgreactnative/cborgreactnative/core
	checkAndCommit "${1}"
	
	ECHO "#### coreView"
	cd ~/git/cborgreactnative/cborgreactnative/coreView
	checkAndCommit "${1}"
	
	ECHO "#### member acquaintances"
	cd ~/git/cborgreactnative/cborgreactnative/member/acquaintances
	checkAndCommit "${1}"
	
	ECHO "#### member dashboard"
	cd ~/git/cborgreactnative/cborgreactnative/member/dashboard
	checkAndCommit "${1}"
	
	ECHO "#### member logout"
	cd ~/git/cborgreactnative/cborgreactnative/member/logout
	checkAndCommit "${1}"
	
	ECHO "#### member profile"
	cd ~/git/cborgreactnative/cborgreactnative/member/profile
	checkAndCommit "${1}"
	
	ECHO "#### member session"
	cd ~/git/cborgreactnative/cborgreactnative/member/session
	checkAndCommit "${1}"
	
	ECHO "#### memberView acquaintances"
	cd ~/git/cborgreactnative/cborgreactnative/memberView/acquaintances
	checkAndCommit "${1}"
	
	ECHO "#### memberView dashboard"
	cd ~/git/cborgreactnative/cborgreactnative/memberView/dashboard
	checkAndCommit "${1}"
	
	ECHO "#### memberView logout"
	cd ~/git/cborgreactnative/cborgreactnative/memberView/logout
	checkAndCommit "${1}"
	
	ECHO "#### memberView profile"
	cd ~/git/cborgreactnative/cborgreactnative/memberView/profile
	checkAndCommit "${1}"
	
	
	
	ECHO "#### main"
	cd ~/git/cborgreactnative/cborgreactnative
	checkAndCommit "${1}"
	
	ECHO "#### Done committing"
}

all() {
	commitAll "$*"
}


	
if [ $# -eq 0 ]; then
	echo "You must supply a comment"
else 
	str="$*"
	echo Your comment is $str
	all $str
fi	
